
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/lib/graphql/schema.graphql",
  require: ["ts-node/register"],
  documents: "src/lib/graphql/operations/*.ts",
  generates: {
    "src/lib/graphql/generated/types-and-hooks.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ]
    }
  }
};

export default config;
