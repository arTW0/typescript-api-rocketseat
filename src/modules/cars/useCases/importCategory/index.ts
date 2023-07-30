import { ImportCategoryUseCase } from "./ImportCategoryController";
import { ImportCategoryController } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }