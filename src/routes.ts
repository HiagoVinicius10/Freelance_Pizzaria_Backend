import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/multer.js"
import { createCategorySchema } from "./schemas/categorySchemas/categorySchemas.js";
import { ValidateSchema } from "./middlewares/userValidateSchema.js";
import { userSchema } from "./schemas/userSchemas/userSchema.js";
import { authSchema } from "./schemas/userSchemas/userSchema.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { isAdmin } from "./middlewares/isAdmin.js";
import { AuthUserController } from "./controllers/user/authUserController.js";
import { DetailUserController } from "./controllers/user/DetailUserController.js";
import { CreateUserController } from "./controllers/user/createUserController.js";
import { CreateCategoryController } from "./controllers/category/createCategoryController.js";
import { ListCategoryController } from "./controllers/category/listCategoryController.js";
import { CreateProductController } from "./controllers/product/createProductController.js";
import { getProductSchemas, productSchemas } from "./schemas/productSchemas/productSchemas.js";
import { listProductController } from "./controllers/product/listProductController.js";
import { DeleteProductController } from "./controllers/product/deleteProductController.js";
import { ListProductByCategoryController } from "./controllers/product/listProductByCategoryController.js";
import { createOrderController } from "./controllers/order/createOrderController.js";
import { listOrdersController } from "./controllers/order/listOrdersController.js";
import { addItemOrderSchema, detailOrderSchemas, finishOrderSchemas, orderSchemas, sendOrderSchemas } from "./schemas/orderSchemas/orderSchemas.js";
import { addItemOrderController } from "./controllers/order/addItemOrderController.js";
import { deleteItemOrderController } from "./controllers/order/deleteItemOrderController.js";
import { detailOrderController } from "./controllers/order/detailOrderController.js";
import { sendOrderController } from "./controllers/order/sendOrderController.js";
import { finishOrderController } from "./controllers/order/finishOrderController.js";
import { deleteOrderController } from "./controllers/order/deleteOrderController.js";

const router = Router();
const upload = multer(uploadConfig)

// Rotas Para Criar um usuario
router.post(
    '/users',
     ValidateSchema(userSchema),
     new CreateUserController().handle
    );

// Rotas para Logar um usuario
router.post(
    "/session",
     ValidateSchema(authSchema), 
     new AuthUserController().handle
    );

router.get(
    "/me",
     isAuthenticated, 
     new DetailUserController().handle 
    );

    router.post(
        "/category",
        isAuthenticated,
        isAdmin,
        ValidateSchema(createCategorySchema),
       new CreateCategoryController().handle
    )

    router.get(
        "/category",
        isAuthenticated,
        new ListCategoryController().handle
    )

    router.post(
        "/product",
        isAuthenticated,
        isAdmin,
        upload.single("file"),
        ValidateSchema(productSchemas),
        new CreateProductController().handle
    )

    router.get(
        "/products",
        isAuthenticated,
        ValidateSchema(getProductSchemas),
         new listProductController().handle )

    router.delete(
        "/product/:id", 
        isAuthenticated, 
        isAdmin,
        new DeleteProductController().handle
    )

    router.get(
        "/category/product",
        isAuthenticated,
        new ListProductByCategoryController().handle
    )

    router.post(
        "/order",
        isAuthenticated,
        ValidateSchema(orderSchemas),
        new createOrderController().handle
    )

    router.get(
        "/orders",
        isAuthenticated,
        new listOrdersController().handle
    )

    router.post(
        "/order/add",
        isAuthenticated,
        ValidateSchema(addItemOrderSchema),
        new addItemOrderController().handle
    )
    
    router.delete(
        "/order/remove",
        isAuthenticated,
        new deleteItemOrderController().handle
    )

    router.get(
        "/order/detail",
        isAuthenticated,
        ValidateSchema(detailOrderSchemas),
        new detailOrderController().handle
    )

    router.put(
        "/order/send",
        isAuthenticated,
        ValidateSchema(sendOrderSchemas),
        new sendOrderController().handle
    )

    router.put(
        "/order/finish",
        isAuthenticated,
        ValidateSchema(finishOrderSchemas),
        new finishOrderController().handle
    )

    router.delete(
        "/order",
        isAuthenticated,
        new deleteOrderController().handle
    )


export { router };