import { IUseCase } from "../../../shared/application/use-case.interface";
import { NotFoundError } from "../../../shared/domain/errors/not-found.error";
import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import { Category } from "../../domain/category/category.entity";
import { ICategoryRepository } from "../../domain/category/category.repository";
import { CategoryOutput, CategoryOutputMapper } from "./common/category-output";

type Input = {
  id: string;
};

type Output = CategoryOutput;

export class GetCategoryUseCase implements IUseCase<Input, Output> {
  constructor(private categoryRepo: ICategoryRepository) {}

  async execute(input: Input) {
    const uuid = new Uuid(input.id);
    const category = await this.categoryRepo.findById(uuid);

    if (!category) {
      throw new NotFoundError(input.id, Category);
    }

    return CategoryOutputMapper.toOutput(category);
  }
}
