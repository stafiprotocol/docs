Welcome to the StaFi Protocol Documentation repository. This is an open-source project, and we encourage contributions from anyone who wishes to improve our documentation. This README provides a comprehensive guide on how to contribute and expand our documentation.

# **Prerequisites**

Before you begin, ensure that you have Node.js installed on your system. If you don't have it installed, you can download it from the **[official Node.js website](https://nodejs.org/)**.

Additionally, this project uses **`pnpm`** as its package manager. If you don't have **`pnpm`** installed, you can install it globally using **`npm`** with the following command:

```
npm install -g pnpm
```

## **Setting Up Your Local Development Environment**

Once you have Node.js and **`pnpm`** installed, you can set up your local development environment. First, clone the repository to your local machine. Then, navigate to the project directory and install the necessary dependencies using **`pnpm`**:

```
pnpm i
```

After installing the dependencies, you can start the local development server with the following command:

```
pnpm dev
```

Now, you can visit **`localhost:3000`** in your web browser to view the documentation.

## **Deploying the Project**

To deploy the project, you can run **`pnpm build`**. Alternatively, you can use GitHub Actions if you prefer.

## **Using Nextra and Markdown**

Our documentation uses [Nextra](https://nextra.site/), a static site generator for Next.js, and Markdown for formatting. Nextra components like steps, tabs, and callouts can also be used to structure the content effectively. For additional guidance, visit the [Nextra Documentation](https://nextra.site/docs/guide).

Here are some examples of how to use various features:

- Headers: **`#` H1**, **`##` H2**, **`###` H3**
- a: `[StaFi](https://stafi.io "title")`
- br: `\`
- em: `*`
- Blockquotes: **`>` quote**
- img: `![Alt text](/image/logo.png "title")`
- Lists: **`- item`**, **`1. item`**
- Strong emphasis: **`*bold**`**
- Strikethrough: **`~~strikethrough~~`**

**Task List**

```
- [ ] rBNB
- [x] rETH
```

**Table**
| Syntax        | Description |   Test Text |
| :------------ | :---------: | ----------: |
| Header        |    Title    | Here's this |
| Paragraph     |    Text     |    And more |
| Strikethrough |             |    ~~Text~~ |

```
| Syntax        | Description |   Test Text |
| :------------ | :---------: | ----------: |
| Header        |    Title    | Here's this |
| Paragraph     |    Text     |    And more |
| Strikethrough |             |    ~~Text~~ |
```

**Latex**

The **Pythagorean equation**: $a=\sqrt{b^2 + c^2}$.

```json
The **Pythagorean equation**: $a=\sqrt{b^2 + c^2}$.
```


## Component

Nextra components like steps, tabs, and callouts can also be used to structure the content effectively. Here's how to use them:

**Steps**

```json
import { Steps } from 'nextra-theme-docs'
 
<Steps>
 
### Step 1
 
Contents for step 1.
 
### Step 2
 
Contents for step 2.
 
</Steps>
```

**Tabs**

```json
import { Tab, Tabs } from 'nextra-theme-docs'
 
<Tabs items={['pnpm', 'npm', 'yarn']} defaultIndex="1">
  ...
</Tabs>
```

**Callout**

```json
import { Callout } from 'nextra/components'
 
<Callout type="info" emoji="ℹ️">
  Today is Friday.
</Callout>
```

## Using Images

Images can be a powerful tool to enhance the clarity and visual appeal of the documentation. To include an image in the documentation, you'll need to follow these steps:

1. **Place the Image in the Public Directory:** All images should be placed in the **`public/image`** directory of the project. This allows the images to be accessed and displayed correctly when the documentation is viewed.
2. **Reference the Image in Your Document:** To display an image in a Markdown file, you can use the following syntax: **`![Alt Text](path_to_image "Title")`**. Replace **`Alt Text`** with a brief description of the image, **`path_to_image`** with the relative path to the image file (starting from the **`public/image`** directory), and **`Title`** with the title of the image.

For example, if you have an image named **`logo.png`** in the **`public/image`** directory, and you want to display it in your document, you would use the following syntax:

```markdown
![StaFi Logo](image/logo.png "StaFi Logo")
```

This will display the image in your document with "StaFi Logo" as the alt text and title.

Remember, including relevant images can greatly enhance the readability and understanding of the documentation.

## **Contributing to the Documentation**

We welcome contributions from anyone. Here's how you can contribute:

1. **Edit the Markdown Document:** Find the file you want to modify and click the 'Edit' button to make your changes.
    
    ![Clickedit](https://i.imgur.com/1FvC6iY.png)
    
2. **Submit a Pull Request:** Once you've made your changes, commit them and submit a pull request. Your changes will be reviewed and, if approved, merged into the main codebase.
    
    ![editcontent](https://i.imgur.com/rUctw9U.png)
    

If you're familiar with Git, you can also fork the repository, make changes in your fork, and then submit a pull request so that they can be reviewed and potentially merged into the main codebase.

# License

This project is licensed under the MIT License.

This project is licensed under the MIT License.
