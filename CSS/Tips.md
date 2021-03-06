# Important CSS Tips

1.  The box-sizing property allows us to include the padding and border in an element's total width and height. i.e. box doesn't overflow the container/box.

Otherwise ,content-box (Default). The width and height properties (and min/max properties) includes only the content. Border and padding are not included.

e.g. --> If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width.

```html
*, *::before,*::after{ box-sizing:border-box }
```

2. center a page

```
.container{
    width:700px;
    margin-left:auto;
    margin-right:auto;
}

```

3. If value of RGB is same in all three color we will get a shade of grey.

![Shades-of-Grey](https://user-images.githubusercontent.com/79152383/165888482-07b12802-c6fb-4aa7-87d7-815991c16d3e.png)

4. Always use max-width instead of width for both layouts and images.

max-width : if containers width is less than max-width then max-width will be 100% of container else it will be the value set. (e.g max-width:100px ).

5. we should rem unit as a responsive unit and also set it using percentage to respect default font size.

```
html{
    font-size:62.5% // 10px;
}

```

6. Whenever box-shadow is increased on hovering a component, the opacity should decrease a little as acc. to law of physics whenever a item is moved upwards the shadow becomes both larger and lighter.
