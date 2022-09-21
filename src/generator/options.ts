import { EmitBlockKind } from "./emit-block";

export interface ExternalGeneratorOptions {
  emitDMMF?: boolean;
  emitTranspiledCode?: boolean;
  simpleResolvers?: boolean;
  useOriginalMapping?: boolean;
  useUncheckedScalarInputs?: boolean;
  emitIdAsIDType?: boolean;
  emitOnly?: EmitBlockKind[];
  customPrismaImportPath?: string;
  contextPrismaKey?: string;
  useSimpleUpdateInputs?: boolean;
}

export interface InternalGeneratorOptions {
  outputDirPath: string;
  prismaClientPath: string;
}

export interface GeneratorOptions
  extends Omit<ExternalGeneratorOptions, "emitOnly" | "contextPrismaKey">,
    InternalGeneratorOptions {
  blocksToEmit: EmitBlockKind[];
  contextPrismaKey: string;
  relativePrismaOutputPath: string;
  absolutePrismaOutputPath: string | undefined;
}
