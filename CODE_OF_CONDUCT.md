# dashi-clientで開発するときの規則

## css

### cssの変数名の規則

- 基本的には、`styled-components`を利用するとこ
- `styled-components`を利用した変数名は、`Styled`の接頭辞を付けること (UpperCase)
  - (例) `StyledCloseButton`
- `styled-components`を利用していない変数名は、`styls`の接頭辞を付けること (CamelCase)
  - (例) `styleConnectorSelect`
- どうしても`styled-components`で難しい所は、`MUI`を利用すること
- `font-size`は、全て`rem`で設定すること
  - px数の1/10の値をremに与えると、ちょうど同じ大きさになるように設定している
  - (例) `16px`の場合、`1.6rem`と設定する

## Custom Hooksの規則

- Custom Hooksのファイルは、hooksディレクトリに配置すること
- ファイル名とHooks名は、`use`の接頭辞を付けること
  - fetch APIを利用しているCustom Hooksは、`useFetch`の接頭辞を付けること
  - ソートをしているHooksは、`useSort`の接頭辞を付けること

## フォームの規則

- `react-hook-form`を利用すること
- バリデータに`zod`を利用すること
  - バリデーションスキーマは、`validations`ディレクトリに格納すること
  - スキーマ名の接尾辞に`Schema`を付けること (CamelCase)
    - (例) `generateSchem`
  - スキーマの型の接尾辞に`SchemaType`を付けること (UpperCase)
    - (例) `GenerateSchemaType`

バリデーションスキーマの例 (validations/generate.ts)

```typescript
import { z } from 'zod';
import { Record } from '../models/record';

const generateSchema = z.object({
  quantity: z.coerce.number().refine((quantity) => quantity <= 49 && quantity >= 1 && Number.isInteger(quantity), {
    message: `1個から49個までの間で生成する数を指定してください。`,
  }),
  record: z.custom<Record>(),
});

export { generateSchema };
export type GenerateSchemaType = z.infer<typeof generateSchema>;
```

## componentの規則

- componentsディレクトリ配下にファイルを配置すること
- Functional Componentを書いているファイル名とFunctional Component名は、Camel Caseで記述すること
- propsの型は、同じファイル内に`Props`という`type`を作成し、`FC<Props>`のように型を付けること (以下に例を示す)

SampleComponent.tsx

```typescript
type Props = {
  arg: string;
};

const SampleComponent: FC<Props> = (props) => {
  return (
    <>
      <h1>{props.arg}</h1>
    </>
  );
};

export default SampleComponent;

```

## ページの規則

- ページのルーティングは、`App.tsx`に書くこと
- 各ページのルートのファイルは、`routes/pages`配下に配置すること

## storybooksの規則

- `*.stories.tsx`は、`*.tsx`と同一の階層に置くこと
- `meta`の`title`は、`title: 'COMPONENTS/componentディレクトリ以上の実際のファイルのある階層',`としてください
  - (例) ~/components/header/Header.tsxの場合、`title: 'COMPONENTS/header/',`と書く

## formterの規則

- formatterは、`prettier`を利用すること
  - configファイルは、`.prettierrc`の内容で統一すること
