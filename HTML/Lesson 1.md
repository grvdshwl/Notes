# Videos in HTML

1. Render a video.

```
   <video src="tutorial.mp4" poster="./thumbnail.jpeg" controls width="400px" autoplay loop > </video>

```

2. add a youtube video.

```
<iframe width="560" height="315" src="https://www.youtube.com/embed/pQN-pnXPaVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```

# Tables in HTML

```
<table>

<thead>
<caption><h2>List of numbers.</h2></caption>
<tr>
<th>One </th>
<th> Two </th>
</tr>
</thead>

<tbody>
<tr>
<td colspan="2" >One </td>
<td> Two </td>
</tr>

<tr>
<td>Three </td>
<td> Four </td>
</tr>
</tbody>

</table>


```

# I-Frames Forms

It is a tag which which is used to embed other website in your website.

```
<iframe src="demo_iframe.htm" style="border:none;" title="Iframe Example"></iframe>

```

# Meta Tags in HTML

The `<meta> `tag defines metadata about an HTML document. Metadata is data (information) about data.

`<meta> `tags always go inside the `<head> `element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

Metadata will not be displayed on the page, but is machine parsable.

Metadata is used by browsers (how to display content or reload page), search engines (keywords), and other web services.

```
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```
