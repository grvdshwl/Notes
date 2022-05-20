# CSS

## CSS : Cascading style sheets

### CSS describes the visual style and presentation of the content written in HTML.

![CSS Rule](https://user-images.githubusercontent.com/79152383/165200807-801e986a-591c-4c2a-a596-467ee853a7b7.png)

# What are Pseudo-classes?

A pseudo-class is used to define a special state of an element.

### Priority in psuedo classes

> Link > Visited > Hover > Active

> Note: a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective! a:active MUST come after a:hover in the CSS definition in order to be effective! Pseudo-class names are not case-sensitive.

### Priority in CSS selectors

> Important > Inline CSS > ID > Class > Pseudo Class > Element >
> Inheritance

![Screenshot 2022-04-27 at 11 38 18 AM](https://user-images.githubusercontent.com/79152383/165452875-c0a2584e-261e-447d-9f92-f99d24b089ce.png)

[Pseudo Classes - More info](https://www.w3schools.com/css/css_pseudo_classes.asp)

![Screenshot 2022-04-27 at 11 38 48 AM](https://user-images.githubusercontent.com/79152383/165453154-9befcf3d-c9fb-495b-a735-9442d3d0e083.png)

### What are Pseudo-Elements?

A CSS pseudo-element is used to style specified parts of an element.

For example, it can be used to:

Style the first letter, or line, of an element
Insert content before, or after, the content of an element

> selector::pseudo-element {
> property: value;
> }

[Pseudo Element - More Info](https://www.w3schools.com/css/css_pseudo_elements.asp)
