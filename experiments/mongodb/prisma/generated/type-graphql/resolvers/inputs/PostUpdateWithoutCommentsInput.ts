import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutPostsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutPostsNestedInput";

@TypeGraphQL.InputType("PostUpdateWithoutCommentsInput", {
  isAbstract: true
})
export class PostUpdateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  body?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutPostsNestedInput, {
    nullable: true
  })
  author?: UserUpdateOneRequiredWithoutPostsNestedInput | undefined;
}
