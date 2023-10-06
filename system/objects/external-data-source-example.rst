Example configuration external data source
******************************************

We assume you already had a look on :doc:`types` where you can find
a description of the individual fields.

To reproduce this example, choose a category you want to add a custom
field, click on *New Attribute* and select *External data source field* under
*Format*.

Our example story is to fetch data from an external product database. We want
to add our products to the tickets so that the products can be searched and
chosen from a list and also create a link to the product website.

Base configuration
==================

.. figure:: /images/system/objects/eds-example-base.png
    :alt: Initial steps to configure external data source object type
    :scale: 90 %
    :align: center

**Example:**

- Name: *product*
- Display: *Product*

External data source configuration
==================================

First, enter the search URL followed by ``#{search.term}``

**Example:** ``https://dummyjson.com/products/search?q=#{search.term}``

After that, head down to the preview section and enter a string you expect to
be in the external data in the search field.

**Example:** ``mac``

Then you can find a preview of the response data below:

.. figure:: /images/system/objects/eds-example-1.png
    :align: center
    :scale: 70 %
    :alt: Preview of JSON response based on search term

We recommend using the preview to have a look on the structure. There is a
top-level element called ``products``. One level below, you can find the
attributes ``id`` and ``title``.

**Search result response based on search from example:**

.. code::

   {
      "products": [
         {
            "id": 6,
            "title": "MacBook Pro",
            "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
            "price": 1749,
            "discountPercentage": 11.02,
            "rating": 4.57,
            "stock": 83,
            "brand": "Apple",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
            "images": [
              "https://i.dummyjson.com/data/products/6/1.png",
              "https://i.dummyjson.com/data/products/6/2.jpg",
              "https://i.dummyjson.com/data/products/6/3.png",
              "https://i.dummyjson.com/data/products/6/4.jpg"
            ]
         },
         {
            "id": 22,
            "title": "Elbow Macaroni - 400 gm",
            "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
            "price": 14,
            "discountPercentage": 15.58,
            "rating": 4.57,
            "stock": 146,
            "brand": "Bake Parlor Big",
            "category": "groceries",
            "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/22/1.jpg",
              "https://i.dummyjson.com/data/products/22/2.jpg",
              "https://i.dummyjson.com/data/products/22/3.jpg"
            ]
         },
         {
            "id": 26,
            "title": "Plant Hanger For Home",
            "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
            "price": 41,
            "discountPercentage": 17.86,
            "rating": 4.08,
            "stock": 131,
            "brand": "Boho Decor",
            "category": "home-decoration",
            "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
            "images": [
              "https://i.dummyjson.com/data/products/26/1.jpg",
              "https://i.dummyjson.com/data/products/26/2.jpg",
              "https://i.dummyjson.com/data/products/26/3.jpg",
              "https://i.dummyjson.com/data/products/26/4.jpg",
              "https://i.dummyjson.com/data/products/26/5.jpg",
              "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
            ]
         }
      ],
      "total": 3,
      "skip": 0,
      "limit": 3
   }

To tell Zammad that the data is located below the ``products`` level, you
have to put it in the field *Search result list key*. This makes Zammad
searching in the stated list.

After inserting ``products`` in the mentioned field, you get an extended preview.
You can find an additional box *Search result list* with a JSON structure.
This is the response based on the search string, stripped from the upper
``products`` element.

.. figure:: /images/system/objects/eds-example-2.png
    :align: center
    :scale: 70 %
    :alt: Preview of JSON response search result list

Now you need to provide the keys for the search result values and labels. As
already mentioned, we are looking for the ``id`` and the ``title`` of our
products. If not already happened, it is now a good time to look in the preview
of the *Search result list*.

.. code::

   [
      {
         "id": 6,
         "title": "MacBook Pro",
         "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
         "price": 1749,
         "discountPercentage": 11.02,
         "rating": 4.57,
         "stock": 83,
         "brand": "Apple",
         "category": "laptops",
         "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
         "images": [
           "https://i.dummyjson.com/data/products/6/1.png",
           "https://i.dummyjson.com/data/products/6/2.jpg",
           "https://i.dummyjson.com/data/products/6/3.png",
           "https://i.dummyjson.com/data/products/6/4.jpg"
         ]
      },
      {
         "id": 22,
         "title": "Elbow Macaroni - 400 gm",
         "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
         "price": 14,
         "discountPercentage": 15.58,
         "rating": 4.57,
         "stock": 146,
         "brand": "Bake Parlor Big",
         "category": "groceries",
         "thumbnail": "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
         "images": [
           "https://i.dummyjson.com/data/products/22/1.jpg",
           "https://i.dummyjson.com/data/products/22/2.jpg",
           "https://i.dummyjson.com/data/products/22/3.jpg"
         ]
      },
      {
         "id": 26,
         "title": "Plant Hanger For Home",
         "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
         "price": 41,
         "discountPercentage": 17.86,
         "rating": 4.08,
         "stock": 131,
         "brand": "Boho Decor",
         "category": "home-decoration",
         "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
         "images": [
           "https://i.dummyjson.com/data/products/26/1.jpg",
           "https://i.dummyjson.com/data/products/26/2.jpg",
           "https://i.dummyjson.com/data/products/26/3.jpg",
           "https://i.dummyjson.com/data/products/26/4.jpg",
           "https://i.dummyjson.com/data/products/26/5.jpg",
           "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
         ]
      }
   ]

After locating our two keys, we insert them in *search result value key*
(``id``) and in *Search result label key* (``title``).

Basically, we configured the external data source already and we can see a table
in the preview section:

.. figure:: /images/system/objects/eds-example-3.png
    :align: center
    :scale: 70 %
    :alt: Preview of product table based on search term

Now just the *Link template* is missing. We can add now the domain, where
additional product information can be found.

Example: ``https://your_domain.com/q=#{ticket.product}``

After configuring your *Link template*, there is another column in the preview.
Hovering on the icons in the *Link* column will show you where it forwards you.

.. figure:: /images/system/objects/eds-example-4.png
    :align: center
    :scale: 70 %
    :alt: Preview of product table based on search term

In our example, one of the links looks like: https://your_domain.com/q=6, where
the 6 is the product id.

You can find more information regarding the URL in :doc:`types`.
