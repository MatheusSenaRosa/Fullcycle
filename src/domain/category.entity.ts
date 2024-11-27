type CategoryConstructorProps = {
  category_id?: string;
  name: string;
  description?: string;
  is_active?: boolean;
  created_at?: Date;
};

export type CategoryCreateCommand = {
  name: string;
  description?: string;
  is_active: boolean;
};

export class Category {
  category_id: string;
  name: string;
  description?: string;
  is_active: boolean;
  created_at: Date;

  constructor(props: CategoryConstructorProps) {
    this.category_id = props?.category_id || "1";
    this.name = props.name;
    this.description = props?.description;
    this.is_active = props?.is_active || true;
    this.created_at = props?.created_at || new Date();
  }

  static create(props: CategoryCreateCommand) {
    return new Category(props);
  }

  changeName(name: string) {
    this.name = name;
  }

  changeDescription(description: string) {
    this.description = description;
  }

  activate() {
    this.is_active = true;
  }

  deactivate() {
    this.is_active;
  }

  toJSON() {
    return {
      category_id: this.category_id,
      name: this.name,
      description: this.description,
      is_active: this.is_active,
      created_at: this.created_at,
    };
  }
}
