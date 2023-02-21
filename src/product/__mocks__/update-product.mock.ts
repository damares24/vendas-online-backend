import { categoryMock } from "../../category/__mocks__/category.mock";
import { UpdateProductDto } from "../dtos/update-product.dto";


export const updateProductMock: UpdateProductDto= {
    categoryId: categoryMock.id,
    image: 'kejdiewfed',
    name: 'name mock product atualizar',
    price: 55.0,
};