import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationsRepository();
const createSpecificationService = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationsController = new CreateSpecificationsController(createSpecificationService);

export { createSpecificationsController }