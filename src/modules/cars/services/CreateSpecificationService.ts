import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository"

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  static execute(arg0: { name: any; description: any; }) {
    throw new Error('Method not implemented.');
  }
  constructor(private specificationRepository: ISpecificationsRepository) { }

  execute({ description, name }: IRequest): void {
    const specificationAlreadyExists = this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists")
    }

    this.specificationRepository.create({
      description,
      name
    })
  }
}

export { CreateSpecificationService }