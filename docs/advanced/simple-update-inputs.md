---
title: Simple update inputs
sidebar_position: 9
---

In version 2.6.0, Prisma released `atomicNumberOperations` preview feature that allows you to update scalar fields without checking the current value, e.g. increment or decrement a number value.

However, GraphQL does not support input unions, hence it's not possible to support both simple scalar fields and atomic operation inputs at the same time. So, if you prefer simplicity over more complex approach using nested inputs, you can provide the `useSimpleUpdateInputs` generator option:

```prisma {4}
generator typegraphql {
  provider              = "typegraphql-prisma"
  output                = "../prisma/generated/type-graphql"
  useSimpleUpdateInputs = true
}
```

By using this option, instead of generating nested inputs with `IntFieldUpdateOperationsInput` or `StringFieldUpdateOperationsInput` as a field type:

```ts
@TypeGraphQL.InputType("CategoryUpdateInput", {
  isAbstract: true,
})
export class CategoryUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  number?: IntFieldUpdateOperationsInput | undefined;
}
```

it will emit much simpler version of inputs for update operations:

```ts
@TypeGraphQL.InputType("CategoryUpdateInput", {
  isAbstract: true,
})
export class CategoryUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  slug?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  number?: number | undefined;
}
```
