import { Specification } from "../entities/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ description, name }: ICreateCategoryDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
