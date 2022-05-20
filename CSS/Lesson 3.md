# Lesson III

![Layout ](https://user-images.githubusercontent.com/79152383/166100250-1b77eabf-d9e1-4d75-a6d8-f9bfe9c1e6bb.png)

![Page VS Component Layout](https://user-images.githubusercontent.com/79152383/166100240-ff616fb5-6b23-4925-98aa-65bcee15a6c9.png)

![3 Ways of building Layouts](https://user-images.githubusercontent.com/79152383/166100230-59f1a386-cb98-4e97-a3ab-068f1470ae94.png)

![Floats](https://user-images.githubusercontent.com/79152383/166100227-3c89f6e8-f90f-434c-9ab6-8a935e47c11f.png)

![Box-Sizing:Border-Box](https://user-images.githubusercontent.com/79152383/166100220-a02874fc-7aea-4560-addd-0d8c22cdd73e.png)

# Flex Box

1. Flexbox is a set of related **CSS properties** for building one-dimensional layouts.

2. It has a idea of dividing empty space inside container can automatically be divided by its children.

3. It solves the problem of vertical centering which is considered to be a difficult problem in css.

![Flex Box Terminology](https://user-images.githubusercontent.com/79152383/166880215-8cdae1d1-579a-4005-b0d6-b763a5678564.png)

![Flex Box Properties ](https://user-images.githubusercontent.com/79152383/166880200-c7912c54-099c-4c5d-afd4-f9084631912f.png)

# Grid Box

1. Grid is a set of related **CSS properties** for building two-dimensional layouts.

2. Divide a container into rows and columns.

![Basic Terminology](https://user-images.githubusercontent.com/79152383/166880493-b910a9a2-3710-40df-bba4-9e444b5f7421.png)

![Grid Terminology](https://user-images.githubusercontent.com/79152383/166880517-1c38b285-3e16-433c-b6fa-18f1be07a57a.png)

![CSS Grid Properties](https://user-images.githubusercontent.com/79152383/166880536-5ff4a6ee-650d-4992-a98e-6d833d1a7433.png)

### Grid Template Area

The grid-template-areas property specifies areas within the grid layout.

You can name grid items by using the grid-area property, and then reference to the name in the grid-template-areas property.

![Screenshot 2022-05-05 at 3 57 47 PM](https://user-images.githubusercontent.com/79152383/166906143-e7241ee9-4550-4198-b6fd-865b58d13422.png)

# FlexBox design patterns

1. **Even columns** : To make sure coulmns are equal as if flex-basis is 100% they shrink at an equal ratio.

```css
.even-columns {
  display: flex;
}

.even-column {
  flex-basis: 100%;

  /* flex-shrink:1 (default behaviour) */
}
```

2. **Gridish** : automatically adjusting grids as per the screen size

```css
.grid-ish {
  display: flex;
  flex-wrap: wrap;
}

.grid-ish > * {
  flex: 1 1 10em;

  /* flex : 1 1 33% 
  alternative
  */
}
```

3.**Content Sidebar** : create a 30/70 layout for all screen sizes.

```css
.content-sidebar {
  display: flex;
  flex-wrap: wrap;
}

.content-sidebar > *:nth-child(1) {
  flex: 1 1 70%;
  min-width: 200px; /*trail and check the value for used case.*/
}

.content-sidebar > *:nth-child(2) {
  flex: 1 1 30%;
}
```
