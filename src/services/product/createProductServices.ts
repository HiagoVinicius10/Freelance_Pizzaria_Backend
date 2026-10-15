import { Readable } from "node:stream";
import { cloudinary } from "../../config/cloudinary.js";
import { prisma } from "../../prisma/index.js";

interface ProductProps {
    name: string
    price: number
    description: string
    category_id: string 
    imageBuffer: Buffer
    imageName: string
}

class CreateProductServices {
    async execute({name,price,description,category_id,imageBuffer,imageName}: ProductProps ) {

        const categoryExiste = await prisma.category.findFirst({
            where:{
                id: category_id
            }
        })

        if(!categoryExiste){
            throw new Error("Categoria não encontrada! ")
        }
        
        let bannerUrl = "";

        try{
            const result = await new Promise<any>((resolve, reject) =>{
            const uploadStream = cloudinary.uploader.upload_stream({
                folder: "products",
                resource_type: "image",
                public_id: `${Date.now()}-${imageName.split(".")[0]}`,
            }, 
            (error, result) => {
                if(error) reject(error);
                else resolve( result );
            })

            const bufferStream = Readable.from(imageBuffer)
            bufferStream.pipe(uploadStream)
        })
        
        bannerUrl = result.secure_url;
           
        }catch(error){
            throw new Error (" Error ao fazer o upload da imagem! ");
        }

        const createProduct = await prisma.product.create({
            data:{
                name: name,
                price: price,
                description:description,
                banner: bannerUrl,
                category_id: category_id
            },
            select:{
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true,
                createAt: true,

                category: {
                    select:{
                        id: true,
                        name: true
                    }
                }
            }
        });

        return createProduct;
    }
}

export { CreateProductServices };