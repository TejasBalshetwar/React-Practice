// createElement is used to create react elements and objects.  It takes the tagName, props and children as arguments
// props are nothing but the attributes of the tag
// children are the values to be shown in element
// ReactElement(Object) = HTML(browser understands to convert object to html)
// creating nested Element
// div parent -> div.child -> heading


const firstH1 = React.createElement('h1',{},"I am an H1 tag");
const firstH2 = React.createElement('h2',{},"I am an H2 tag");
const child1 = React.createElement('div',{'id':'child1'},[firstH1,firstH2])

const secH1 = React.createElement('h1',{},"I am an H1 tag");
const secH2 = React.createElement('h2',{},"I am an H2 tag");
const child2 = React.createElement('div',{'id':'child2'},[secH1,secH2])

const parent = React.createElement('div',{'id':'parent'},[child1,child2]);

const heading = React.createElement('h1',{'id':'heading'},"Hello World using React!!!")

// React will only be able to access the contents of the page present in the root tag of the page
// other tags outside of root in html will have no effect on react code.
// That is why react is called a library and not a framework as it is easy to plug and play
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
console.log(parent)

// Render will replace the existing content
// root.render(heading);