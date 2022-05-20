# CSS Selectors

## General Selectors

CSS selectors are used to "find" (or select) the HTML elements you want to style.

- Universal Selector : **\*** --> every element in the body.

- element Selector : li,p,div --> specific element

- Class selector : .class_name

- ID selector : #ID_NAME
  Note -on;y one ID on a page with a specific name.

## Combinator Selectors

- `div,span,p{color:red;}` ----> selects every div,span & p and apply property.

- div.red ---> `<div class="red"><div/>`

  span.green.center.bold ---> `<span class="green center bold"/>`

- div p ---> select every p tag inside div.

- div > span --> Select every span that is direct child of div.

- li + span.red --> select immediate next sibiling of li that is span.red;

> The adjacent sibling selector is used to select an element that is directly after another specific element.

- li.red ~ li --> all the siblings that after li.red.

The general sibling selector selects all elements that are next siblings of a specified element.

### Pseudo Selectors

A pseudo-class is used to define a special state of an element.

![Screenshot 2022-04-28 at 9 10 34 AM](https://user-images.githubusercontent.com/79152383/165671763-f479fd9c-1771-45d3-9ce7-a59e3348e1e4.png)

### Pseudo Selectors

A CSS pseudo-element is used to style specified parts of an element.

![Screenshot 2022-04-28 at 9 12 21 AM](https://user-images.githubusercontent.com/79152383/165671914-48017266-8890-4da7-bcff-7f2dbc17d0d8.png)

### Attribute Selector

It is possible to style HTML elements that have specific attributes or attribute values.

![Screenshot 2022-04-28 at 9 14 03 AM](https://user-images.githubusercontent.com/79152383/165672163-cb1411ad-a1b9-463d-a7a7-28f031614e15.png)

# CSS Specificity

> If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

- If all the rules have same specificity then the last one wins.

![CSS Specificty](https://cms-assets.tutsplus.com/uploads/users/30/posts/34141/image/spec-02.svg)

- !important has highest specificity in css , even greater than inline styles.

![Specificity Calculator](https://user-images.githubusercontent.com/79152383/165682319-bd002f6e-d665-4539-a9dd-8c4b750ac313.png)

# Inheritance

Inheritance
In CSS, inheritance controls what happens when no value is specified for a property on an element.

#### Inhertitance Priority

custom styles(_written by a user_) **>** User agent styles (set by chrome ,mozilla) **>** Initial style (default value set by CSS)

> `div {display :initial}` (sets display to initial value set by css for div)

- `border:inherit`
  `button {font-family:inherit}`
  --> child element will inherit property from its
  parent which arte not inherited by default.

- all property can selected all the values of a selector and set it to inherit,initial or unset(initial or inherit whatever is default).

`button{ all:unset }` --> removes all the default styles in button
