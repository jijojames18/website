## Code base for website jijojames.com. 
This project uses React for building the user interface. In total, there are 3 pages in the website. Each one of them receives the required data by calling PHP REST API's constructed using Slim Framework. Technical details of each page is shown below.

1. Index
  The index page also known as gallery page calls REST API `/v1/gallery` to fetch details of all images from gallery table. The URL of the 
  image along with metadata is returned in the call which is then rendered using img tag.
2. Blog
  The blog page calls REST API `/v1/blog` to fetch details of all blog posts from blog table. The URL of the blog post in blogger along with
  a short description of the post is returned in the call.
3. Videos
  The videos page calls REST API `/v1/videos` to fetch details of all videos from video table. The iframe of the video is returned in
  the call.

In addition, there is a REST endpoint `/v1/contact` which receives the details provided by user in the contact form and sends an email.

### CSS
Styles are saved as scss files. Common styles are stored inside styles.scss and page specific styles are stored in corresponding partial files(_gallery.scss, _blog.scss, _videos.scss). The html files have reference to only style.css file and hence the changes made to scss file needs to be converted to css and stored inside style.css file. This can be done by running `sass css/styles.scss css/style.css` everytime a change is done or by watching for changes and re-compiling css automatically using `sass --watch css/styles.scss css/style.css`.

### Database
There are 3 tables used in the project. The rest endpoints query the tables using PDO.

1. gallery

  | Name     |    Type      |                            |
  | -------- | ------------ | -------------------------- |
  | slno     | INT(10)      | PRIMARY KEY AUTO INCREMENT |
  | file_url | TEXT         |                            |
  | place    | TEXT         |                            |
  | date     | VARCHAR(255) |                            |


2. blog

  | Name        |    Type      |                            |
  | ----------- | ------------ | -------------------------- |
  | slno        | INT(10)      | PRIMARY KEY AUTO INCREMENT |
  | title       | VARCHAR(255) |                            |
  | date        | VARCHAR(255) |                            |
  | short_desc  | TEXT         |                            |
  | image       | TEXT         |                            |
  | blogger_url | TEXT         |                            |


3. videos

  | Name        |    Type      |                            |
  | ----------- | ------------ | -------------------------- |
  | slno        | INT(10)      | PRIMARY KEY AUTO INCREMENT |
  | youtube_url | VARCHAR(255) |                            |

Full REST endpoint specification is given below.

### GET	rest/v1/gallery	
Request: {}	

Response: Array of objects of format

| Name     |    Type      |
| -------- | ------------ |
| slno     | NUMBER       |
| file_url | STRING       |
| place    | STRING       |
| date     | STRING       |

### GET	rest/v1/blog	
Request: {}		

Response: Array of objects of format

| Name        |    Type      |
| ----------- | ------------ |
| slno        | NUMBER       |
| title       | STRING       |
| date        | STRING       |
| short_desc  | STRING       |
| image       | STRING       |
| blogger_url | STRING       |

### GET	rest/v1/videos	
Request: {}		

Response: Array of objects of format

| Name        |    Type      |
| ----------- | ------------ |
| slno        | NUMBER       |
| youtube_url | STRING       |

### GET	rest/v1/contact  
Request: Object of format

| Name     |    Type      |
| -------- | ------------ |
| name     | STRING       |
| email    | STRING       |
| message  | STRING       |

Response: {}


The website uses the following libraries for rendering the user interface.
1. Jquery v1.11.2
2. Twitter Bootstrap v3.3.1
3. Lightbox (http://lokeshdhakar.com/projects/lightbox2/)
4. Modernizr 2.8.3


## Build Scripts

The project uses ant and npm to build the required files in the `dist` folder of the repository. 

### `npm run transplie`

Generates the transpiled js files(gallery.js, video.js, blog.js) in the dist folder. Note : For development purposes, the ES6 files are transpiled on load by the browser. This is done by adding `text/babel` to the script references.


### `ant clean`

Removes the `dist` folder

### `ant build -DdbHost=<DBHOST> -DdbUser=<DBUSER> -DdbPassword=<DBPASSWORD> -DdbName=<DBNAME>`
Replaces the constants in `bootstrap.php` with the command line arguments. Combines all css files into a single style.css file. Moves all static image resources into the `img` folder. Combine all library files into a single file `vendor.js`. Transpile the ES6 files. Replaces all script and link tags in html files with the bundled file references.
