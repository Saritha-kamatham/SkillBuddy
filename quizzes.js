// Quiz data for all topics
export const quizzes = {
  "React Fundamentals": [
    // 20+ challenging questions for React Fundamentals
    {
      type: "multiple-choice",
      question: "Which of the following best describes the virtual DOM in React?",
      options: [
        "A direct copy of the real DOM",
        "A lightweight JavaScript representation of the real DOM",
        "A server-side rendering engine",
        "A CSS-in-JS solution"
      ],
      correctAnswer: "A lightweight JavaScript representation of the real DOM",
      explanation: "The virtual DOM is a lightweight JS object that React uses to optimize DOM updates."
    },
    {
      type: "multiple-choice",
      question: "What is the main reason for using keys in React lists?",
      options: [
        "To improve styling",
        "To uniquely identify elements for efficient re-rendering",
        "To enable event handling",
        "To bind data to components"
      ],
      correctAnswer: "To uniquely identify elements for efficient re-rendering",
      explanation: "Keys help React identify which items have changed, are added, or are removed."
    },
    {
      type: "true-false",
      question: "React's useEffect hook runs after every render by default.",
      correctAnswer: true,
      explanation: "Without a dependency array, useEffect runs after every render."
    },
    {
      type: "short-answer",
      question: "What hook would you use to memoize a computed value in a functional component?",
      correctAnswer: "useMemo",
      explanation: "useMemo memoizes expensive calculations between renders."
    },
    {
      type: "multiple-choice",
      question: "Which of the following will NOT cause a re-render in a React component?",
      options: [
        "Calling setState",
        "Changing a prop value",
        "Directly mutating this.state",
        "Updating context value"
      ],
      correctAnswer: "Directly mutating this.state",
      explanation: "Direct mutation does not trigger a re-render; setState must be used."
    },
    {
      type: "multiple-choice",
      question: "What is the default value of a prop if it is not provided?",
      options: ["undefined", "null", "0", "false"],
      correctAnswer: "undefined",
      explanation: "If a prop is not provided, its value is undefined."
    },
    {
      type: "true-false",
      question: "React components must return a single root element.",
      correctAnswer: true,
      explanation: "Components must return a single root, but you can use fragments <>...</> for grouping."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to update state in a class component?",
      options: ["setState", "updateState", "changeState", "modifyState"],
      correctAnswer: "setState",
      explanation: "setState is the correct method for updating state in class components."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the dependency array in useEffect?",
      correctAnswer: "To control when the effect runs",
      explanation: "The dependency array determines when the effect should re-run."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid React hook?",
      options: ["useState", "useReducer", "useFetch", "useEffect"],
      correctAnswer: "useFetch",
      explanation: "useFetch is not a built-in React hook."
    },
    {
      type: "true-false",
      question: "Props are immutable inside a component.",
      correctAnswer: true,
      explanation: "Props should never be mutated inside a component."
    },
    {
      type: "multiple-choice",
      question: "What does React.StrictMode do?",
      options: [
        "Enables strict linting rules",
        "Checks for potential problems in an application",
        "Forces all components to be pure",
        "Disables legacy lifecycle methods"
      ],
      correctAnswer: "Checks for potential problems in an application",
      explanation: "StrictMode helps highlight potential problems in an app."
    },
    {
      type: "short-answer",
      question: "What is the return value of useState?",
      correctAnswer: "An array with the state and a setter function",
      explanation: "useState returns [state, setState]."
    },
    {
      type: "multiple-choice",
      question: "Which lifecycle method is replaced by useEffect?",
      options: ["componentDidMount", "shouldComponentUpdate", "getDerivedStateFromProps", "componentWillUnmount"],
      correctAnswer: "componentDidMount",
      explanation: "useEffect with an empty dependency array mimics componentDidMount."
    },
    {
      type: "true-false",
      question: "You can use multiple useState hooks in a single component.",
      correctAnswer: true,
      explanation: "You can use as many useState hooks as needed."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of using React Fragments?",
      options: [
        "They improve performance by reducing DOM nodes",
        "They allow you to use state",
        "They enable server-side rendering",
        "They provide context"
      ],
      correctAnswer: "They improve performance by reducing DOM nodes",
      explanation: "Fragments let you group elements without adding extra nodes."
    },
    {
      type: "short-answer",
      question: "What is the main difference between a controlled and uncontrolled component?",
      correctAnswer: "Controlled components are managed by React state",
      explanation: "Controlled components rely on React state, uncontrolled use the DOM."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to create a React component?",
      options: ["Function declaration", "Class declaration", "Arrow function", "Object literal"],
      correctAnswer: "Object literal",
      explanation: "Object literals are not valid React components."
    },
    {
      type: "true-false",
      question: "React can only be used for web development.",
      correctAnswer: false,
      explanation: "React Native allows React to be used for mobile development."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the key prop in React lists?",
      options: ["To style list items", "To uniquely identify elements", "To bind data", "To handle events"],
      correctAnswer: "To uniquely identify elements",
      explanation: "Keys help React identify which items have changed."
    },
    {
      type: "short-answer",
      question: "What is JSX?",
      correctAnswer: "A syntax extension for JavaScript that looks like HTML",
      explanation: "JSX allows you to write HTML-like code in JavaScript."
    }
  ],
  "Advanced React Patterns": [
    // 20+ challenging questions for Advanced React Patterns
    {
      type: "multiple-choice",
      question: "Which hook is best for sharing logic between components?",
      options: ["useState", "useEffect", "Custom hooks", "useContext"],
      correctAnswer: "Custom hooks",
      explanation: "Custom hooks allow you to encapsulate and share logic."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of the Context API?",
      options: ["To manage local state", "To pass data deeply without props", "To handle side effects", "To optimize rendering"],
      correctAnswer: "To pass data deeply without props",
      explanation: "Context API is used for passing data through the component tree."
    },
    {
      type: "true-false",
      question: "A higher-order component (HOC) is a function that returns a new component.",
      correctAnswer: true,
      explanation: "HOCs are functions that take a component and return a new component."
    },
    {
      type: "multiple-choice",
      question: "Which pattern is best for code reuse in React?",
      options: ["Render props", "Component inheritance", "Direct DOM manipulation", "Global variables"],
      correctAnswer: "Render props",
      explanation: "Render props allow code reuse by passing a function as a prop."
    },
    {
      type: "short-answer",
      question: "What hook is commonly used for memoizing callback functions?",
      correctAnswer: "useCallback",
      explanation: "useCallback memoizes callback functions to prevent unnecessary re-renders."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid use case for React.memo?",
      options: ["Memoizing a functional component", "Preventing unnecessary re-renders", "Optimizing performance", "Managing side effects"],
      correctAnswer: "Managing side effects",
      explanation: "React.memo is not used for managing side effects."
    },
    {
      type: "true-false",
      question: "The useReducer hook is useful for complex state logic.",
      correctAnswer: true,
      explanation: "useReducer is ideal for managing complex state transitions."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using Error Boundaries?",
      options: ["Catching errors in event handlers", "Catching errors in rendering lifecycle", "Improving performance", "Handling async code"],
      correctAnswer: "Catching errors in rendering lifecycle",
      explanation: "Error Boundaries catch errors during rendering, lifecycle methods, and constructors."
    },
    {
      type: "short-answer",
      question: "What is the difference between useMemo and useCallback?",
      correctAnswer: "useMemo memoizes values, useCallback memoizes functions",
      explanation: "useMemo returns a memoized value, useCallback returns a memoized function."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to provide context?",
      options: ["Context.Provider", "Context.Consumer", "useContext", "Context.Injector"],
      correctAnswer: "Context.Injector",
      explanation: "There is no Context.Injector in React."
    },
    {
      type: "true-false",
      question: "Suspense can be used for data fetching in React.",
      correctAnswer: true,
      explanation: "React Suspense can be used for data fetching with concurrent features."
    },
    {
      type: "multiple-choice",
      question: "What is a render prop?",
      options: ["A prop that is a function and returns a React element", "A prop that renders a string", "A prop that sets state", "A prop that triggers an event"],
      correctAnswer: "A prop that is a function and returns a React element",
      explanation: "Render props are functions passed as props that return React elements."
    },
    {
      type: "short-answer",
      question: "What is the main use of useImperativeHandle?",
      correctAnswer: "To customize the instance value exposed to parent components when using refs",
      explanation: "useImperativeHandle customizes the ref instance value."
    },
    {
      type: "multiple-choice",
      question: "Which hook is best for managing global state in a React app?",
      options: ["useState", "useReducer", "useContext", "useRef"],
      correctAnswer: "useContext",
      explanation: "useContext is used for accessing global state provided by Context API."
    },
    {
      type: "true-false",
      question: "React.lazy can be used for code splitting.",
      correctAnswer: true,
      explanation: "React.lazy enables code splitting by loading components lazily."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a benefit of using custom hooks?",
      options: ["Code reuse", "Cleaner components", "Direct DOM manipulation", "Separation of concerns"],
      correctAnswer: "Direct DOM manipulation",
      explanation: "Custom hooks are not for direct DOM manipulation."
    },
    {
      type: "short-answer",
      question: "What is the main difference between a HOC and a custom hook?",
      correctAnswer: "HOCs wrap components, custom hooks reuse logic in functions",
      explanation: "HOCs are functions that return components, custom hooks are functions that reuse logic."
    },
    {
      type: "multiple-choice",
      question: "Which lifecycle method is NOT available in functional components?",
      options: ["componentDidMount", "useEffect", "useLayoutEffect", "useState"],
      correctAnswer: "componentDidMount",
      explanation: "componentDidMount is a class component lifecycle method."
    },
    {
      type: "true-false",
      question: "You can nest Context Providers in React.",
      correctAnswer: true,
      explanation: "Context Providers can be nested for different context values."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of useLayoutEffect?",
      options: ["To run code after painting the DOM", "To run code before painting the DOM", "To manage state", "To handle events"],
      correctAnswer: "To run code before painting the DOM",
      explanation: "useLayoutEffect runs synchronously after all DOM mutations but before painting."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Suspense in React?",
      correctAnswer: "To handle loading states for async components",
      explanation: "Suspense lets you declaratively handle loading states."
    }
  ],
  "Vue.js Essentials": [
    // 20+ challenging questions for Vue.js Essentials
    {
      type: "multiple-choice",
      question: "What is the main purpose of the Vue reactivity system?",
      options: ["To manage CSS", "To track and react to data changes", "To handle routing", "To optimize server rendering"],
      correctAnswer: "To track and react to data changes",
      explanation: "Vue's reactivity system automatically updates the DOM when data changes."
    },
    {
      type: "multiple-choice",
      question: "Which directive is used for conditional rendering in Vue?",
      options: ["v-for", "v-if", "v-bind", "v-model"],
      correctAnswer: "v-if",
      explanation: "v-if is used for conditional rendering."
    },
    {
      type: "true-false",
      question: "Vue components can have multiple root elements.",
      correctAnswer: false,
      explanation: "Vue components must have a single root element."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'key' attribute in v-for?",
      options: ["To style elements", "To uniquely identify elements for efficient updates", "To bind data", "To handle events"],
      correctAnswer: "To uniquely identify elements for efficient updates",
      explanation: "The key attribute helps Vue track elements for efficient DOM updates."
    },
    {
      type: "short-answer",
      question: "What is the main difference between v-if and v-show?",
      correctAnswer: "v-if adds/removes elements, v-show toggles visibility",
      explanation: "v-if actually adds/removes elements from the DOM, v-show only toggles display."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a Vue lifecycle hook?",
      options: ["created", "mounted", "destroyed", "initialized"],
      correctAnswer: "initialized",
      explanation: "'initialized' is not a Vue lifecycle hook."
    },
    {
      type: "true-false",
      question: "Vue's computed properties are cached based on their dependencies.",
      correctAnswer: true,
      explanation: "Computed properties are only re-evaluated when their dependencies change."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of Vue's 'watch' option?",
      options: ["To watch for DOM changes", "To react to data changes and run custom logic", "To handle events", "To manage state"],
      correctAnswer: "To react to data changes and run custom logic",
      explanation: "Watchers let you run code in response to data changes."
    },
    {
      type: "short-answer",
      question: "What is the purpose of v-model in Vue?",
      correctAnswer: "To create two-way data binding",
      explanation: "v-model creates two-way binding between input and data."
    },
    {
      type: "multiple-choice",
      question: "Which file extension is used for single-file Vue components?",
      options: [".vue", ".jsx", ".js", ".vjs"],
      correctAnswer: ".vue",
      explanation: ".vue is the standard extension for single-file components."
    },
    {
      type: "true-false",
      question: "Props in Vue are mutable by default.",
      correctAnswer: false,
      explanation: "Props are read-only in Vue."
    },
    {
      type: "multiple-choice",
      question: "Which Vue directive is used for binding attributes?",
      options: ["v-bind", "v-for", "v-if", "v-on"],
      correctAnswer: "v-bind",
      explanation: "v-bind is used to bind attributes to expressions."
    },
    {
      type: "short-answer",
      question: "What is the main use of Vue Router?",
      correctAnswer: "To enable client-side routing",
      explanation: "Vue Router is used for SPA navigation."
    },
    {
      type: "multiple-choice",
      question: "Which state management library is recommended for Vue 3?",
      options: ["Vuex", "Redux", "Pinia", "MobX"],
      correctAnswer: "Pinia",
      explanation: "Pinia is the recommended state management library for Vue 3."
    },
    {
      type: "true-false",
      question: "You can use both Vuex and Pinia in the same project.",
      correctAnswer: true,
      explanation: "You can use both, but it's not recommended for most cases."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using slots in Vue?",
      options: ["To pass data to child components", "To enable content distribution in components", "To manage state", "To handle events"],
      correctAnswer: "To enable content distribution in components",
      explanation: "Slots allow you to inject content into child components."
    },
    {
      type: "short-answer",
      question: "What is a mixin in Vue?",
      correctAnswer: "A reusable piece of logic that can be included in components",
      explanation: "Mixins let you share logic across components."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to define a component in Vue?",
      options: ["Object syntax", "Class syntax", "Function syntax", "Array syntax"],
      correctAnswer: "Array syntax",
      explanation: "Array syntax is not used for defining Vue components."
    },
    {
      type: "true-false",
      question: "Vue supports server-side rendering (SSR).",
      correctAnswer: true,
      explanation: "Vue can be used for SSR with Nuxt.js or Vue Server Renderer."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of the 'emit' function in Vue?",
      options: ["To emit custom events to parent components", "To update state", "To fetch data", "To render templates"],
      correctAnswer: "To emit custom events to parent components",
      explanation: "emit is used to send events from child to parent."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'mounted' lifecycle hook?",
      correctAnswer: "To run code after the component is inserted into the DOM",
      explanation: "mounted is called after the component is mounted."
    }
  ],
  "Angular Crash Course": [
    {
      type: "multiple-choice",
      question: "What is the primary purpose of Angular's NgModule?",
      options: [
        "To define a component",
        "To group related code into cohesive blocks",
        "To handle HTTP requests",
        "To manage CSS styles"
      ],
      correctAnswer: "To group related code into cohesive blocks",
      explanation: "NgModules help organize an Angular app into cohesive blocks of functionality."
    },
    {
      type: "multiple-choice",
      question: "Which decorator is used to define an Angular component?",
      options: ["@NgModule", "@Injectable", "@Component", "@Directive"],
      correctAnswer: "@Component",
      explanation: "@Component is used to define Angular components."
    },
    {
      type: "true-false",
      question: "Angular uses two-way data binding by default for all properties.",
      correctAnswer: false,
      explanation: "Two-way binding is explicit using [(ngModel)], not default for all properties."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of Angular's dependency injection?",
      options: [
        "To inject CSS styles",
        "To provide services and dependencies to components",
        "To handle routing",
        "To manage state"
      ],
      correctAnswer: "To provide services and dependencies to components",
      explanation: "Dependency injection provides services and dependencies to components and other services."
    },
    {
      type: "short-answer",
      question: "What is the default change detection strategy in Angular?",
      correctAnswer: "CheckAlways",
      explanation: "The default change detection strategy is CheckAlways."
    },
    {
      type: "multiple-choice",
      question: "Which Angular CLI command creates a new component?",
      options: ["ng new component", "ng generate component", "ng add component", "ng create component"],
      correctAnswer: "ng generate component",
      explanation: "ng generate component (or ng g c) creates a new component."
    },
    {
      type: "true-false",
      question: "Angular's HttpClient returns Observables by default.",
      correctAnswer: true,
      explanation: "HttpClient returns Observables, not Promises, by default."
    },
    {
      type: "multiple-choice",
      question: "Which lifecycle hook is called after the component's view has been fully initialized?",
      options: ["ngOnInit", "ngAfterViewInit", "ngOnDestroy", "ngDoCheck"],
      correctAnswer: "ngAfterViewInit",
      explanation: "ngAfterViewInit is called after the component's view is initialized."
    },
    {
      type: "short-answer",
      question: "What is the selector property used for in @Component?",
      correctAnswer: "To define the custom HTML tag for the component",
      explanation: "The selector property defines the tag name for the component."
    },
    {
      type: "multiple-choice",
      question: "Which directive is used for structural changes like adding/removing elements?",
      options: ["*ngIf", "[ngClass]", "[ngStyle]", "(click)"],
      correctAnswer: "*ngIf",
      explanation: "*ngIf is a structural directive for adding/removing elements."
    },
    {
      type: "true-false",
      question: "Angular supports lazy loading of modules.",
      correctAnswer: true,
      explanation: "Angular supports lazy loading for better performance."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of Angular's RouterModule?",
      options: ["To manage HTTP requests", "To enable client-side routing", "To handle forms", "To manage state"],
      correctAnswer: "To enable client-side routing",
      explanation: "RouterModule enables navigation and routing in Angular apps."
    },
    {
      type: "short-answer",
      question: "What is the difference between a service and a component in Angular?",
      correctAnswer: "A service provides logic/data, a component manages UI",
      explanation: "Services are for logic/data, components are for UI."
    },
    {
      type: "multiple-choice",
      question: "Which pipe is used to transform text to uppercase?",
      options: ["lowercase", "uppercase", "capitalize", "titlecase"],
      correctAnswer: "uppercase",
      explanation: "The uppercase pipe transforms text to uppercase."
    },
    {
      type: "true-false",
      question: "Angular supports both template-driven and reactive forms.",
      correctAnswer: true,
      explanation: "Angular supports both form approaches."
    },
    {
      type: "multiple-choice",
      question: "Which file contains the metadata for an Angular project?",
      options: ["angular.json", "package.json", "tsconfig.json", "main.ts"],
      correctAnswer: "angular.json",
      explanation: "angular.json contains project metadata."
    },
    {
      type: "short-answer",
      question: "What is the main use of the ngOnDestroy lifecycle hook?",
      correctAnswer: "To clean up before a component is destroyed",
      explanation: "ngOnDestroy is used for cleanup logic."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid Angular directive?",
      options: ["*ngFor", "*ngSwitch", "*ngRepeat", "*ngIf"],
      correctAnswer: "*ngRepeat",
      explanation: "*ngRepeat is from AngularJS, not Angular."
    },
    {
      type: "true-false",
      question: "Angular CLI can generate services, modules, and pipes.",
      correctAnswer: true,
      explanation: "The CLI can generate many types of files."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using Angular's AOT compiler?",
      options: ["Faster builds", "Smaller bundle size", "Faster rendering and early error detection", "Better CSS support"],
      correctAnswer: "Faster rendering and early error detection",
      explanation: "AOT compiles templates at build time for faster rendering and error detection."
    },
    {
      type: "short-answer",
      question: "What is the main difference between @Input and @Output?",
      correctAnswer: "@Input passes data in, @Output emits events out",
      explanation: "@Input is for parent-to-child, @Output is for child-to-parent communication."
    }
  ],
  "Frontend with HTML & CSS": [
    // 20+ challenging questions for Frontend with HTML & CSS
    {
      type: "multiple-choice",
      question: "Which HTML element is used for defining navigation links?",
      options: ["<nav>", "<header>", "<section>", "<aside>"],
      correctAnswer: "<nav>",
      explanation: "<nav> is the semantic element for navigation links."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property is used to create a stacking context?",
      options: ["z-index", "position", "opacity", "float"],
      correctAnswer: "z-index",
      explanation: "z-index creates a stacking context when used with positioned elements."
    },
    {
      type: "true-false",
      question: "The <main> element can be used multiple times in a single HTML document.",
      correctAnswer: false,
      explanation: "There should only be one <main> element per page."
    },
    {
      type: "multiple-choice",
      question: "Which CSS layout module is best for creating two-dimensional layouts?",
      options: ["Flexbox", "Grid", "Float", "Inline-block"],
      correctAnswer: "Grid",
      explanation: "CSS Grid is designed for two-dimensional layouts."
    },
    {
      type: "short-answer",
      question: "What is the default display value for a <div> element?",
      correctAnswer: "block",
      explanation: "<div> elements are block-level by default."
    },
    {
      type: "multiple-choice",
      question: "Which HTML attribute is used for accessibility to describe an image?",
      options: ["alt", "title", "aria-label", "desc"],
      correctAnswer: "alt",
      explanation: "The alt attribute provides alternative text for images."
    },
    {
      type: "true-false",
      question: "The CSS property 'float' removes an element from the normal document flow.",
      correctAnswer: true,
      explanation: "Floated elements are removed from the normal flow."
    },
    {
      type: "multiple-choice",
      question: "Which HTML5 element is used to mark up a self-contained composition?",
      options: ["<article>", "<aside>", "<section>", "<figure>"],
      correctAnswer: "<article>",
      explanation: "<article> is for self-contained compositions."
    },
    {
      type: "short-answer",
      question: "What CSS property is used to create rounded corners?",
      correctAnswer: "border-radius",
      explanation: "border-radius creates rounded corners."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid value for the CSS display property?",
      options: ["block", "inline", "center", "flex"],
      correctAnswer: "center",
      explanation: "'center' is not a valid display value."
    },
    {
      type: "true-false",
      question: "The <section> element is always required in HTML5 documents.",
      correctAnswer: false,
      explanation: "<section> is optional and used for semantic grouping."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property is used to control the space between lines of text?",
      options: ["letter-spacing", "line-height", "word-spacing", "text-indent"],
      correctAnswer: "line-height",
      explanation: "line-height controls the vertical spacing between lines."
    },
    {
      type: "short-answer",
      question: "What is the default value of the CSS position property?",
      correctAnswer: "static",
      explanation: "The default position is static."
    },
    {
      type: "multiple-choice",
      question: "Which HTML element is used for emphasizing text?",
      options: ["<em>", "<strong>", "<b>", "<i>"],
      correctAnswer: "<em>",
      explanation: "<em> is used for emphasis, <strong> for strong importance."
    },
    {
      type: "true-false",
      question: "CSS variables can be defined globally using :root selector.",
      correctAnswer: true,
      explanation: ":root allows global CSS variable definition."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property is used to add shadow to text?",
      options: ["box-shadow", "text-shadow", "filter", "shadow"],
      correctAnswer: "text-shadow",
      explanation: "text-shadow adds shadow to text."
    },
    {
      type: "short-answer",
      question: "What is the semantic difference between <b> and <strong>?",
      correctAnswer: "<strong> indicates importance, <b> is just bold",
      explanation: "<strong> is for importance, <b> is purely visual."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property is used to create a flex container?",
      options: ["display", "flex-direction", "justify-content", "align-items"],
      correctAnswer: "display",
      explanation: "display: flex creates a flex container."
    },
    {
      type: "true-false",
      question: "The <header> element can be used inside an <article> element.",
      correctAnswer: true,
      explanation: "<header> can be used inside <article> for section headers."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property is used to control the stacking order of absolutely positioned elements?",
      options: ["z-index", "order", "position", "float"],
      correctAnswer: "z-index",
      explanation: "z-index controls stacking order."
    },
    {
      type: "short-answer",
      question: "What is the difference between margin and padding?",
      correctAnswer: "Margin is outside the border, padding is inside",
      explanation: "Margin is space outside the border, padding is inside."
    }
  ],
  "SASS & CSS Preprocessing": [
    // 20+ challenging questions for SASS & CSS Preprocessing
    {
      type: "multiple-choice",
      question: "Which symbol is used to declare a variable in SASS?",
      options: ["$", "@", "#", "%"],
      correctAnswer: "$",
      explanation: "SASS variables start with $."
    },
    {
      type: "multiple-choice",
      question: "Which SASS feature allows you to reuse a block of styles with arguments?",
      options: ["Mixin", "Function", "Placeholder", "Loop"],
      correctAnswer: "Mixin",
      explanation: "Mixins allow you to reuse styles with arguments."
    },
    {
      type: "true-false",
      question: "SASS supports both indented and SCSS syntax.",
      correctAnswer: true,
      explanation: "SASS supports both syntaxes."
    },
    {
      type: "multiple-choice",
      question: "Which directive is used to import partials in SASS?",
      options: ["@import", "@use", "@extend", "@mixin"],
      correctAnswer: "@import",
      explanation: "@import is used to import partials."
    },
    {
      type: "short-answer",
      question: "What is the main difference between @mixin and @extend?",
      correctAnswer: "@mixin allows arguments, @extend inherits styles",
      explanation: "@mixin is for reusable code, @extend is for inheritance."
    },
    {
      type: "multiple-choice",
      question: "Which SASS function is used to lighten a color?",
      options: ["lighten", "darken", "fade", "mix"],
      correctAnswer: "lighten",
      explanation: "lighten($color, $amount) lightens a color."
    },
    {
      type: "true-false",
      question: "SASS variables are available globally by default.",
      correctAnswer: true,
      explanation: "SASS variables are global unless scoped."
    },
    {
      type: "multiple-choice",
      question: "Which SASS feature allows you to loop over a list of values?",
      options: ["@for", "@each", "@while", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "SASS supports @for, @each, and @while loops."
    },
    {
      type: "short-answer",
      question: "What is a partial in SASS?",
      correctAnswer: "A file starting with _ that is imported into other files",
      explanation: "Partials start with _ and are imported, not compiled directly."
    },
    {
      type: "multiple-choice",
      question: "Which operator is used for division in SASS?",
      options: ["/", "%", "div", "*"],
      correctAnswer: "/",
      explanation: "SASS uses / for division."
    },
    {
      type: "true-false",
      question: "@extend can be used to share styles between selectors.",
      correctAnswer: true,
      explanation: "@extend shares styles between selectors."
    },
    {
      type: "multiple-choice",
      question: "Which SASS function returns the length of a list?",
      options: ["length", "size", "count", "number"],
      correctAnswer: "length",
      explanation: "length($list) returns the number of items."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using SASS nesting?",
      correctAnswer: "It makes styles more readable and organized",
      explanation: "Nesting helps organize related styles."
    },
    {
      type: "multiple-choice",
      question: "Which SASS directive is used to include a mixin?",
      options: ["@include", "@use", "@import", "@extend"],
      correctAnswer: "@include",
      explanation: "@include is used to include a mixin."
    },
    {
      type: "true-false",
      question: "SASS functions can return values.",
      correctAnswer: true,
      explanation: "SASS functions can return values."
    },
    {
      type: "multiple-choice",
      question: "Which SASS feature is best for code reuse with logic?",
      options: ["Mixin", "Placeholder", "Variable", "Import"],
      correctAnswer: "Mixin",
      explanation: "Mixins allow code reuse with logic and arguments."
    },
    {
      type: "short-answer",
      question: "What is the difference between SCSS and indented SASS syntax?",
      correctAnswer: "SCSS uses braces and semicolons, SASS uses indentation",
      explanation: "SCSS is CSS-like, SASS is indentation-based."
    },
    {
      type: "multiple-choice",
      question: "Which SASS feature is used for conditional logic?",
      options: ["@if", "@for", "@each", "@while"],
      correctAnswer: "@if",
      explanation: "@if is used for conditionals."
    },
    {
      type: "true-false",
      question: "SASS can be used with CSS modules in React projects.",
      correctAnswer: true,
      explanation: "SASS can be integrated with CSS modules."
    },
    {
      type: "multiple-choice",
      question: "Which SASS feature allows you to define a style that is only included when extended?",
      options: ["Placeholder", "Mixin", "Function", "Variable"],
      correctAnswer: "Placeholder",
      explanation: "Placeholders (e.g., %name) are only included when extended."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using SASS over plain CSS?",
      correctAnswer: "SASS adds variables, nesting, mixins, and more",
      explanation: "SASS provides features that make CSS more powerful and maintainable."
    }
  ],
  "Responsive Web Design": [
    {
      type: "multiple-choice",
      question: "Which CSS unit is best for creating fluid layouts that scale with the viewport?",
      options: ["px", "em", "rem", "%"],
      correctAnswer: "%",
      explanation: "% units scale fluidly with the parent or viewport."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of media queries in CSS?",
      options: ["To add animations", "To apply styles based on device characteristics", "To import fonts", "To create gradients"],
      correctAnswer: "To apply styles based on device characteristics",
      explanation: "Media queries allow you to apply styles based on screen size, orientation, etc."
    },
    {
      type: "true-false",
      question: "A mobile-first approach means designing for desktop first and then scaling down.",
      correctAnswer: false,
      explanation: "Mobile-first means designing for mobile first, then scaling up."
    },
    {
      type: "multiple-choice",
      question: "Which meta tag is essential for responsive web design?",
      options: ["<meta charset='utf-8'>", "<meta name='viewport'>", "<meta name='description'>", "<meta http-equiv='X-UA-Compatible'>"],
      correctAnswer: "<meta name='viewport'>",
      explanation: "The viewport meta tag is essential for responsive design."
    },
    {
      type: "short-answer",
      question: "What CSS property is commonly used to create flexible images?",
      correctAnswer: "max-width: 100%",
      explanation: "max-width: 100% makes images scale with their container."
    },
    {
      type: "multiple-choice",
      question: "Which CSS feature allows you to create layouts that adapt to different screen sizes without media queries?",
      options: ["Flexbox", "Grid's auto-fit/auto-fill", "Float", "Position absolute"],
      correctAnswer: "Grid's auto-fit/auto-fill",
      explanation: "Grid's auto-fit/auto-fill can create responsive layouts without explicit media queries."
    },
    {
      type: "true-false",
      question: "The order of CSS media queries does not affect which styles are applied.",
      correctAnswer: false,
      explanation: "Order matters; later queries can override earlier ones."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid media feature for media queries?",
      options: ["min-width", "max-device-width", "orientation", "color-scheme"],
      correctAnswer: "color-scheme",
      explanation: "color-scheme is a CSS property, not a media feature."
    },
    {
      type: "short-answer",
      question: "What is the difference between 'em' and 'rem' units in CSS?",
      correctAnswer: "em is relative to parent, rem is relative to root",
      explanation: "'em' is relative to the parent element's font size, 'rem' is relative to the root."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property can be used to hide an element visually but keep it accessible to screen readers?",
      options: ["display: none", "visibility: hidden", "opacity: 0", "position: absolute; left: -9999px;"],
      correctAnswer: "position: absolute; left: -9999px;",
      explanation: "This technique visually hides but keeps the element in the accessibility tree."
    },
    {
      type: "true-false",
      question: "Using fixed pixel values for layout is recommended for responsive design.",
      correctAnswer: false,
      explanation: "Relative units are preferred for responsiveness."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of using CSS Grid over Flexbox for page layout?",
      options: ["Grid is easier to learn", "Grid supports two-dimensional layouts", "Flexbox is deprecated", "Grid is faster"],
      correctAnswer: "Grid supports two-dimensional layouts",
      explanation: "Grid is designed for both rows and columns."
    },
    {
      type: "short-answer",
      question: "What is a breakpoint in responsive design?",
      correctAnswer: "A specific screen width where layout changes",
      explanation: "Breakpoints define where the design adapts."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a mobile-first media query?",
      options: ["@media (min-width: 600px)", "@media (max-width: 600px)", "@media (orientation: landscape)", "@media (aspect-ratio: 16/9)"],
      correctAnswer: "@media (min-width: 600px)",
      explanation: "Mobile-first uses min-width to scale up."
    },
    {
      type: "true-false",
      question: "The 'picture' element in HTML helps with responsive images.",
      correctAnswer: true,
      explanation: "<picture> allows different images for different devices."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property enables smooth resizing transitions for responsive elements?",
      options: ["transition", "animation", "transform", "filter"],
      correctAnswer: "transition",
      explanation: "transition enables smooth changes in property values."
    },
    {
      type: "short-answer",
      question: "What is the main accessibility concern with hiding content using display: none?",
      correctAnswer: "It removes content from the accessibility tree",
      explanation: "Screen readers can't access display: none elements."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a best practice for responsive typography?",
      options: ["Using clamp()", "Using vw units", "Using fixed px values", "Using rem units"],
      correctAnswer: "Using fixed px values",
      explanation: "Fixed px values do not scale responsively."
    },
    {
      type: "true-false",
      question: "CSS media queries can target device orientation.",
      correctAnswer: true,
      explanation: "Media queries can use orientation: portrait or landscape."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used to test responsive designs across devices?",
      options: ["Lighthouse", "Chrome DevTools Device Toolbar", "Jest", "Webpack"],
      correctAnswer: "Chrome DevTools Device Toolbar",
      explanation: "Chrome DevTools provides device emulation for testing."
    },
    {
      type: "short-answer",
      question: "What is the main difference between 'display: none' and 'visibility: hidden'?",
      correctAnswer: "display: none removes from flow, visibility: hidden keeps space",
      explanation: "display: none removes the element, visibility: hidden keeps its space."
    }
  ],
  "JavaScript Essentials": [
    {
      type: "multiple-choice",
      question: "What is the result of typeof null in JavaScript?",
      options: ["'object'", "'null'", "'undefined'", "'number'"],
      correctAnswer: "'object'",
      explanation: "typeof null returns 'object' due to a historical bug in JavaScript."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a primitive type in JavaScript?",
      options: ["string", "number", "object", "symbol"],
      correctAnswer: "object",
      explanation: "object is not a primitive type; it's a reference type."
    },
    {
      type: "true-false",
      question: "Functions in JavaScript are first-class objects.",
      correctAnswer: true,
      explanation: "Functions can be assigned to variables, passed as arguments, and returned from other functions."
    },
    {
      type: "multiple-choice",
      question: "What will the following code output?\nconsole.log([] + []);",
      options: ["''", "'[]'", "'undefined'", "TypeError"],
      correctAnswer: "''",
      explanation: "Adding two arrays with + results in an empty string due to type coercion."
    },
    {
      type: "short-answer",
      question: "What is the difference between == and === in JavaScript?",
      correctAnswer: "== compares with type coercion, === compares without type coercion",
      explanation: "=== is strict equality, == is loose equality."
    },
    {
      type: "multiple-choice",
      question: "Which method can be used to create a shallow copy of an array?",
      options: ["slice()", "map()", "filter()", "reduce()"],
      correctAnswer: "slice()",
      explanation: "slice() without arguments returns a shallow copy of the array."
    },
    {
      type: "true-false",
      question: "Arrow functions have their own 'this' binding.",
      correctAnswer: false,
      explanation: "Arrow functions inherit 'this' from their lexical scope."
    },
    {
      type: "multiple-choice",
      question: "What is the output of: \nconsole.log(typeof NaN);",
      options: ["'number'", "'NaN'", "'undefined'", "'object'"],
      correctAnswer: "'number'",
      explanation: "NaN is of type 'number' in JavaScript."
    },
    {
      type: "short-answer",
      question: "What does the 'use strict' directive do?",
      correctAnswer: "Enables strict mode, catching common coding errors",
      explanation: "'use strict' enforces stricter parsing and error handling."
    },
    {
      type: "multiple-choice",
      question: "Which of the following will NOT create a new array?",
      options: ["Array.from([1,2,3])", "[... [1,2,3]]", "[1,2,3].map(x => x)", "[1,2,3]"],
      correctAnswer: "[1,2,3]",
      explanation: "[1,2,3] is the same array literal, not a new array."
    },
    {
      type: "true-false",
      question: "The 'let' keyword allows you to declare block-scoped variables.",
      correctAnswer: true,
      explanation: "let and const are block-scoped."
    },
    {
      type: "multiple-choice",
      question: "What is the result of 0.1 + 0.2 === 0.3 in JavaScript?",
      options: ["true", "false", "TypeError", "undefined"],
      correctAnswer: "false",
      explanation: "Floating point arithmetic is imprecise; 0.1 + 0.2 !== 0.3."
    },
    {
      type: "short-answer",
      question: "What is a closure?",
      correctAnswer: "A function that remembers its lexical scope even when executed outside that scope",
      explanation: "Closures allow functions to access variables from their defining scope."
    },
    {
      type: "multiple-choice",
      question: "Which array method mutates the original array?",
      options: ["map", "filter", "sort", "slice"],
      correctAnswer: "sort",
      explanation: "sort() mutates the original array."
    },
    {
      type: "true-false",
      question: "Objects in JavaScript can have properties with symbol keys.",
      correctAnswer: true,
      explanation: "Symbols can be used as unique property keys."
    },
    {
      type: "multiple-choice",
      question: "What is the output of: \nconsole.log(1 + '2' + 3);",
      options: ["'123'", "6", "'33'", "'15'"],
      correctAnswer: "'123'",
      explanation: "String concatenation occurs left to right."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'bind' method?",
      correctAnswer: "To set the value of 'this' in a function",
      explanation: "bind() returns a new function with 'this' set to the provided value."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to declare a function?",
      options: ["function foo() {}", "const foo = function() {}", "const foo = () => {}", "function:foo() {}"],
      correctAnswer: "function:foo() {}",
      explanation: "This is not valid JavaScript syntax."
    },
    {
      type: "true-false",
      question: "The 'arguments' object is available in arrow functions.",
      correctAnswer: false,
      explanation: "Arrow functions do not have their own 'arguments' object."
    },
    {
      type: "multiple-choice",
      question: "What does the Array.prototype.reduce method do?",
      options: ["Filters elements", "Reduces array to a single value", "Sorts elements", "Maps elements to new values"],
      correctAnswer: "Reduces array to a single value",
      explanation: "reduce() accumulates array values into a single result."
    },
    {
      type: "short-answer",
      question: "What is event delegation?",
      correctAnswer: "A technique where a single event handler manages events for multiple elements",
      explanation: "Event delegation leverages event bubbling for efficient event handling."
    }
  ],
  "TypeScript for Developers": [
    {
      type: "multiple-choice",
      question: "What is the main difference between 'interface' and 'type' in TypeScript?",
      options: [
        "Interfaces can be extended, types cannot",
        "Types can represent primitives, interfaces cannot",
        "Interfaces can be merged, types cannot",
        "Types support declaration merging, interfaces do not"
      ],
      correctAnswer: "Interfaces can be merged, types cannot",
      explanation: "Interfaces support declaration merging, while types do not."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid TypeScript type?",
      options: ["any", "unknown", "void", "maybe"],
      correctAnswer: "maybe",
      explanation: "'maybe' is not a valid TypeScript type."
    },
    {
      type: "true-false",
      question: "TypeScript's 'never' type represents values that never occur.",
      correctAnswer: true,
      explanation: "'never' is used for functions that never return or always throw."
    },
    {
      type: "multiple-choice",
      question: "What is the output type of the following function?\nfunction foo(): never { throw new Error('error'); }",
      options: ["void", "never", "undefined", "any"],
      correctAnswer: "never",
      explanation: "The function never returns, so its type is 'never'."
    },
    {
      type: "short-answer",
      question: "What is type assertion in TypeScript?",
      correctAnswer: "A way to tell the compiler to treat a value as a specific type",
      explanation: "Type assertion overrides the inferred type."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to create a generic function in TypeScript?",
      options: ["extends", "implements", "<T>", "generic"],
      correctAnswer: "<T>",
      explanation: "Generics are declared using angle brackets, e.g., <T>."
    },
    {
      type: "true-false",
      question: "TypeScript enums can have both string and numeric values.",
      correctAnswer: true,
      explanation: "Enums can be string, numeric, or heterogeneous."
    },
    {
      type: "multiple-choice",
      question: "What does the 'readonly' modifier do in TypeScript?",
      options: ["Makes a property immutable", "Prevents a class from being extended", "Marks a variable as constant", "None of the above"],
      correctAnswer: "Makes a property immutable",
      explanation: "'readonly' makes a property immutable after initialization."
    },
    {
      type: "short-answer",
      question: "What is the difference between 'unknown' and 'any' types?",
      correctAnswer: "'unknown' is safer; you must check type before use",
      explanation: "'unknown' requires type checking, 'any' does not."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT assignable to type 'never'?",
      options: ["undefined", "null", "a function that always throws", "no value at all"],
      correctAnswer: "undefined",
      explanation: "'never' is not assignable from undefined or null."
    },
    {
      type: "true-false",
      question: "TypeScript supports function overloading.",
      correctAnswer: true,
      explanation: "You can declare multiple signatures for a function."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'Partial<T>' utility type?",
      options: ["Makes all properties of T optional", "Makes all properties of T required", "Removes all properties of T", "None of the above"],
      correctAnswer: "Makes all properties of T optional",
      explanation: "Partial<T> makes all properties in T optional."
    },
    {
      type: "short-answer",
      question: "What is a mapped type in TypeScript?",
      correctAnswer: "A type created by transforming properties of another type",
      explanation: "Mapped types use constructs like {[K in keyof T]: ...}."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid way to define an array in TypeScript?",
      options: ["number[]", "Array<number>", "[number]", "ReadonlyArray<number>"],
      correctAnswer: "[number]",
      explanation: "[number] is not a valid array type; it's a tuple."
    },
    {
      type: "true-false",
      question: "Interfaces can extend multiple interfaces in TypeScript.",
      correctAnswer: true,
      explanation: "Interfaces can extend multiple interfaces using a comma-separated list."
    },
    {
      type: "multiple-choice",
      question: "What does the 'as const' assertion do?",
      options: ["Makes an object deeply immutable", "Casts a value to a constant", "Prevents reassignment", "None of the above"],
      correctAnswer: "Makes an object deeply immutable",
      explanation: "'as const' makes all properties readonly and narrows types to literals."
    },
    {
      type: "short-answer",
      question: "What is a discriminated union?",
      correctAnswer: "A union of types with a common literal property for type narrowing",
      explanation: "Discriminated unions use a shared property to distinguish types."
    },
    {
      type: "multiple-choice",
      question: "Which utility type removes null and undefined from a type?",
      options: ["NonNullable<T>", "Exclude<T, U>", "Omit<T, K>", "Partial<T>"],
      correctAnswer: "NonNullable<T>",
      explanation: "NonNullable<T> removes null and undefined from T."
    },
    {
      type: "true-false",
      question: "TypeScript's type inference can infer tuple types.",
      correctAnswer: true,
      explanation: "TypeScript can infer tuple types from array literals."
    },
    {
      type: "multiple-choice",
      question: "What is the result of 'keyof' on an interface?",
      options: ["A union of property names as strings", "An array of property values", "A mapped type", "A function"],
      correctAnswer: "A union of property names as strings",
      explanation: "keyof returns a union of property names."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'infer' keyword in conditional types?",
      correctAnswer: "To introduce a type variable to be inferred in a conditional type",
      explanation: "'infer' lets you capture and use a type within a conditional type."
    }
  ],
  "Testing with Jest": [
    {
      type: "multiple-choice",
      question: "What is the default test environment in Jest?",
      options: ["jsdom", "node", "browser", "puppeteer"],
      correctAnswer: "jsdom",
      explanation: "Jest uses jsdom by default to simulate a browser environment."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to mock a module in Jest?",
      options: ["jest.mock", "jest.fn", "jest.spyOn", "jest.replace"],
      correctAnswer: "jest.mock",
      explanation: "jest.mock is used to mock modules."
    },
    {
      type: "true-false",
      question: "Jest runs tests in parallel by default.",
      correctAnswer: true,
      explanation: "Jest runs test files in parallel processes for speed."
    },
    {
      type: "multiple-choice",
      question: "What does jest.fn() return?",
      options: ["A new mock function", "A spy", "A promise", "A test suite"],
      correctAnswer: "A new mock function",
      explanation: "jest.fn() creates a new, trackable mock function."
    },
    {
      type: "short-answer",
      question: "What is the purpose of beforeEach in Jest?",
      correctAnswer: "To run setup code before each test",
      explanation: "beforeEach runs a function before every test in a suite."
    },
    {
      type: "multiple-choice",
      question: "Which matcher checks for deep equality in Jest?",
      options: ["toBe", "toEqual", "toMatch", "toContain"],
      correctAnswer: "toEqual",
      explanation: "toEqual checks for deep equality."
    },
    {
      type: "true-false",
      question: "You can use async/await in Jest tests.",
      correctAnswer: true,
      explanation: "Jest supports async/await for asynchronous tests."
    },
    {
      type: "multiple-choice",
      question: "What does jest.clearAllMocks() do?",
      options: ["Removes all mock implementations", "Resets all mock state", "Clears usage data for all mocks", "Deletes all test files"],
      correctAnswer: "Clears usage data for all mocks",
      explanation: "jest.clearAllMocks() clears call and instance data for all mocks."
    },
    {
      type: "short-answer",
      question: "How do you skip a test in Jest?",
      correctAnswer: "Use test.skip or it.skip",
      explanation: "test.skip and it.skip skip the specified test."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to spy on object methods in Jest?",
      options: ["jest.spyOn", "jest.fn", "jest.mock", "jest.observe"],
      correctAnswer: "jest.spyOn",
      explanation: "jest.spyOn creates a mock function for an object's method."
    },
    {
      type: "true-false",
      question: "Jest can collect code coverage information.",
      correctAnswer: true,
      explanation: "Jest can generate code coverage reports."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of afterAll in Jest?",
      options: ["Runs after each test", "Runs after all tests in a suite", "Runs after each describe block", "Runs after each assertion"],
      correctAnswer: "Runs after all tests in a suite",
      explanation: "afterAll runs once after all tests in a suite."
    },
    {
      type: "short-answer",
      question: "What does expect.assertions(n) do?",
      correctAnswer: "Ensures a certain number of assertions are called",
      explanation: "expect.assertions(n) verifies that n assertions are called in a test."
    },
    {
      type: "multiple-choice",
      question: "Which CLI flag runs Jest in watch mode?",
      options: ["--watch", "--run", "--observe", "--monitor"],
      correctAnswer: "--watch",
      explanation: "--watch runs Jest in watch mode."
    },
    {
      type: "true-false",
      question: "Jest can test both frontend and backend JavaScript code.",
      correctAnswer: true,
      explanation: "Jest is framework-agnostic and can test any JS code."
    },
    {
      type: "multiple-choice",
      question: "What does jest.resetModules() do?",
      options: ["Resets the module registry", "Clears all mocks", "Deletes all test files", "Resets timers"],
      correctAnswer: "Resets the module registry",
      explanation: "jest.resetModules() resets the module registry to its initial state."
    },
    {
      type: "short-answer",
      question: "How do you run only a single test in Jest?",
      correctAnswer: "Use test.only or it.only",
      explanation: "test.only and it.only run only the specified test."
    },
    {
      type: "multiple-choice",
      question: "Which matcher checks if a function throws an error?",
      options: ["toThrow", "toError", "toFail", "toCrash"],
      correctAnswer: "toThrow",
      explanation: "toThrow checks if a function throws an error."
    },
    {
      type: "true-false",
      question: "Jest supports snapshot testing.",
      correctAnswer: true,
      explanation: "Jest can save and compare UI snapshots."
    },
    {
      type: "multiple-choice",
      question: "What is the default file extension for Jest test files?",
      options: [".test.js", ".jest.js", ".spec.js", ".check.js"],
      correctAnswer: ".test.js",
      explanation: ".test.js is the default convention for Jest test files."
    },
    {
      type: "short-answer",
      question: "What is the purpose of jest.useFakeTimers()?",
      correctAnswer: "To mock timer functions like setTimeout and setInterval",
      explanation: "jest.useFakeTimers() mocks timer functions for testing."
    }
  ],
  "GraphQL Basics": [
    {
      type: "multiple-choice",
      question: "What is the main advantage of GraphQL over REST?",
      options: [
        "GraphQL is easier to learn",
        "GraphQL allows clients to specify exactly what data they need",
        "GraphQL is faster by default",
        "GraphQL does not require a server"
      ],
      correctAnswer: "GraphQL allows clients to specify exactly what data they need",
      explanation: "GraphQL queries are flexible and allow clients to request only the data they need."
    },
    {
      type: "multiple-choice",
      question: "Which operation is NOT supported by GraphQL?",
      options: ["query", "mutation", "subscription", "delete"],
      correctAnswer: "delete",
      explanation: "GraphQL supports query, mutation, and subscription operations."
    },
    {
      type: "true-false",
      question: "GraphQL schemas are strongly typed.",
      correctAnswer: true,
      explanation: "GraphQL schemas define types and relationships explicitly."
    },
    {
      type: "multiple-choice",
      question: "What is a resolver in GraphQL?",
      options: [
        "A function that resolves a field's value",
        "A type definition",
        "A query string",
        "A database connection"
      ],
      correctAnswer: "A function that resolves a field's value",
      explanation: "Resolvers provide the logic for fetching data for each field."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'mutation' operation in GraphQL?",
      correctAnswer: "To modify data on the server",
      explanation: "Mutations are used for create, update, and delete operations."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a required field in a GraphQL schema?",
      options: ["!", "*", "?", "required"],
      correctAnswer: "!",
      explanation: "An exclamation mark (!) denotes a non-nullable field."
    },
    {
      type: "true-false",
      question: "GraphQL queries can be nested to retrieve related data.",
      correctAnswer: true,
      explanation: "GraphQL supports nested queries for related data."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of fragments in GraphQL?",
      options: [
        "To split queries into multiple requests",
        "To reuse parts of queries",
        "To define types",
        "To handle errors"
      ],
      correctAnswer: "To reuse parts of queries",
      explanation: "Fragments allow you to reuse common query parts."
    },
    {
      type: "short-answer",
      question: "What is introspection in GraphQL?",
      correctAnswer: "A way to query the schema for its structure",
      explanation: "Introspection lets clients discover the schema."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a built-in scalar type in GraphQL?",
      options: ["String", "Int", "Date", "Boolean"],
      correctAnswer: "Date",
      explanation: "Date is not a built-in scalar; it must be custom defined."
    },
    {
      type: "true-false",
      question: "GraphQL supports real-time data with subscriptions.",
      correctAnswer: true,
      explanation: "Subscriptions enable real-time updates in GraphQL."
    },
    {
      type: "multiple-choice",
      question: "What does the 'Query' type represent in a GraphQL schema?",
      options: [
        "The root for read operations",
        "The root for write operations",
        "A custom scalar",
        "A fragment"
      ],
      correctAnswer: "The root for read operations",
      explanation: "Query is the entry point for read operations."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'context' argument in a resolver?",
      correctAnswer: "To share data like authentication info across resolvers",
      explanation: "Context provides shared data for all resolvers in a request."
    },
    {
      type: "multiple-choice",
      question: "Which directive is used for conditional inclusion in a GraphQL query?",
      options: ["@include", "@skip", "@if", "@when"],
      correctAnswer: "@include",
      explanation: "@include and @skip are used for conditional fields."
    },
    {
      type: "true-false",
      question: "GraphQL allows clients to send multiple operations in a single request.",
      correctAnswer: true,
      explanation: "Clients can send multiple operations, but must specify which one to execute."
    },
    {
      type: "multiple-choice",
      question: "What is the result of querying a non-nullable field that returns null?",
      options: [
        "The field is omitted from the response",
        "The entire response is null",
        "An error is returned and the parent field is set to null",
        "The query succeeds with a warning"
      ],
      correctAnswer: "An error is returned and the parent field is set to null",
      explanation: "If a non-nullable field returns null, its parent is set to null and an error is returned."
    },
    {
      type: "short-answer",
      question: "What is schema stitching?",
      correctAnswer: "Combining multiple GraphQL schemas into one",
      explanation: "Schema stitching merges multiple schemas into a single API."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used to explore and test GraphQL APIs?",
      options: ["Postman", "GraphiQL", "Swagger", "Insomnia"],
      correctAnswer: "GraphiQL",
      explanation: "GraphiQL is an in-browser IDE for GraphQL."
    },
    {
      type: "true-false",
      question: "GraphQL supports file uploads out of the box.",
      correctAnswer: false,
      explanation: "File uploads require additional libraries or conventions."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the __typename meta field?",
      options: [
        "To get the name of the GraphQL server",
        "To get the type of an object at runtime",
        "To define a new type",
        "To specify a fragment"
      ],
      correctAnswer: "To get the type of an object at runtime",
      explanation: "__typename returns the object's type at runtime."
    },
    {
      type: "short-answer",
      question: "What is a union type in GraphQL?",
      correctAnswer: "A type that can be one of several object types",
      explanation: "Union types allow a field to return different object types."
    }
  ],
  "Firebase for Web Apps": [
    {
      type: "multiple-choice",
      question: "Which Firebase service provides real-time data synchronization?",
      options: ["Firestore", "Realtime Database", "Cloud Storage", "Cloud Functions"],
      correctAnswer: "Realtime Database",
      explanation: "Realtime Database provides real-time data sync across clients."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between Firestore and Realtime Database?",
      options: [
        "Firestore is NoSQL, Realtime Database is SQL",
        "Firestore supports richer queries and hierarchical data",
        "Realtime Database is faster for all use cases",
        "Firestore does not support offline sync"
      ],
      correctAnswer: "Firestore supports richer queries and hierarchical data",
      explanation: "Firestore offers more advanced querying and data structuring."
    },
    {
      type: "true-false",
      question: "Firebase Authentication supports social login providers like Google and Facebook.",
      correctAnswer: true,
      explanation: "Firebase Auth supports multiple social login providers."
    },
    {
      type: "multiple-choice",
      question: "Which Firebase product would you use to deploy static web assets?",
      options: ["Cloud Functions", "Cloud Storage", "Firebase Hosting", "Firestore"],
      correctAnswer: "Firebase Hosting",
      explanation: "Firebase Hosting is for deploying static web content."
    },
    {
      type: "short-answer",
      question: "What is a security rule in Firebase?",
      correctAnswer: "A rule that controls access to data in Firestore or Realtime Database",
      explanation: "Security rules define who can read/write data."
    },
    {
      type: "multiple-choice",
      question: "Which Firebase service allows you to run backend code in response to events?",
      options: ["Cloud Functions", "Firestore", "Cloud Messaging", "Hosting"],
      correctAnswer: "Cloud Functions",
      explanation: "Cloud Functions run backend code triggered by Firebase events."
    },
    {
      type: "true-false",
      question: "Firestore supports offline data persistence by default in web apps.",
      correctAnswer: false,
      explanation: "Offline persistence must be enabled explicitly in web apps."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum size of a single document in Firestore?",
      options: ["1 MB", "10 MB", "16 MB", "100 MB"],
      correctAnswer: "1 MB",
      explanation: "Firestore documents are limited to 1 MB in size."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Firebase Cloud Messaging (FCM)?",
      correctAnswer: "To send push notifications to devices",
      explanation: "FCM is used for push notifications."
    },
    {
      type: "multiple-choice",
      question: "Which Firebase feature provides analytics and event tracking?",
      options: ["Crashlytics", "Performance Monitoring", "Analytics", "Remote Config"],
      correctAnswer: "Analytics",
      explanation: "Firebase Analytics tracks user events and engagement."
    },
    {
      type: "true-false",
      question: "Firebase Hosting supports custom domains and SSL certificates.",
      correctAnswer: true,
      explanation: "You can use custom domains and SSL with Firebase Hosting."
    },
    {
      type: "multiple-choice",
      question: "What is the default location for Firebase Hosting deployments?",
      options: ["us-central", "europe-west", "asia-east", "global"],
      correctAnswer: "us-central",
      explanation: "The default region is us-central."
    },
    {
      type: "short-answer",
      question: "What is a collection in Firestore?",
      correctAnswer: "A group of documents",
      explanation: "Collections group related documents in Firestore."
    },
    {
      type: "multiple-choice",
      question: "Which Firebase product would you use for file uploads?",
      options: ["Firestore", "Realtime Database", "Cloud Storage", "Cloud Functions"],
      correctAnswer: "Cloud Storage",
      explanation: "Cloud Storage is for file and image uploads."
    },
    {
      type: "true-false",
      question: "Firestore supports compound queries with range filters on multiple fields.",
      correctAnswer: false,
      explanation: "Firestore only allows range filters on a single field per query."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum number of writes per second to a single Firestore document?",
      options: ["1", "10", "100", "1000"],
      correctAnswer: "1",
      explanation: "Firestore allows only 1 write per second to a document."
    },
    {
      type: "short-answer",
      question: "What is Remote Config in Firebase?",
      correctAnswer: "A service to remotely change app behavior and appearance",
      explanation: "Remote Config lets you update app settings without redeploying."
    },
    {
      type: "multiple-choice",
      question: "Which Firebase service helps monitor app crashes?",
      options: ["Crashlytics", "Analytics", "Performance Monitoring", "Cloud Functions"],
      correctAnswer: "Crashlytics",
      explanation: "Crashlytics provides real-time crash reporting."
    },
    {
      type: "true-false",
      question: "Firestore supports real-time listeners for data changes.",
      correctAnswer: true,
      explanation: "You can listen to real-time updates in Firestore."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum nesting depth for subcollections in Firestore?",
      options: ["1", "10", "100", "Unlimited"],
      correctAnswer: "Unlimited",
      explanation: "Firestore allows unlimited nesting of subcollections."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Firebase Emulator Suite?",
      correctAnswer: "To test Firebase apps locally without affecting production data",
      explanation: "The Emulator Suite simulates Firebase services for local development."
    }
  ],
  "Svelte for Beginners": [
    {
      type: "multiple-choice",
      question: "What is the main difference between Svelte and React/Vue?",
      options: [
        "Svelte compiles components at build time",
        "Svelte uses a virtual DOM",
        "Svelte requires a runtime library",
        "Svelte only supports TypeScript"
      ],
      correctAnswer: "Svelte compiles components at build time",
      explanation: "Svelte compiles to efficient JavaScript at build time, with no virtual DOM."
    },
    {
      type: "multiple-choice",
      question: "Which syntax is used to declare a reactive variable in Svelte?",
      options: ["$: variable", "$variable", "let $: variable", "@reactive variable"],
      correctAnswer: "$: variable",
      explanation: "The $: label marks a reactive statement in Svelte."
    },
    {
      type: "true-false",
      question: "Svelte components can have multiple root elements.",
      correctAnswer: true,
      explanation: "Svelte allows multiple root elements in a component."
    },
    {
      type: "multiple-choice",
      question: "How do you bind a value to an input element in Svelte?",
      options: ["bind:value", "v-model", "ngModel", "value={}"],
      correctAnswer: "bind:value",
      explanation: "bind:value creates two-way binding in Svelte."
    },
    {
      type: "short-answer",
      question: "What is a store in Svelte?",
      correctAnswer: "A reactive object for sharing state between components",
      explanation: "Stores provide reactive state management in Svelte."
    },
    {
      type: "multiple-choice",
      question: "Which lifecycle function runs after the component is first rendered?",
      options: ["onMount", "beforeUpdate", "afterUpdate", "onDestroy"],
      correctAnswer: "onMount",
      explanation: "onMount runs after the component is mounted to the DOM."
    },
    {
      type: "true-false",
      question: "Svelte supports both writable and readable stores.",
      correctAnswer: true,
      explanation: "Svelte provides writable, readable, and derived stores."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the <svelte:component> tag?",
      options: [
        "To render a dynamic component",
        "To define a slot",
        "To import a component",
        "To create a store"
      ],
      correctAnswer: "To render a dynamic component",
      explanation: "<svelte:component> allows dynamic component rendering."
    },
    {
      type: "short-answer",
      question: "How do you pass props to a Svelte component?",
      correctAnswer: "By adding attributes to the component tag",
      explanation: "Props are passed as attributes in Svelte."
    },
    {
      type: "multiple-choice",
      question: "Which directive is used for conditional rendering in Svelte?",
      options: ["{#if}", "v-if", "ngIf", "@if"],
      correctAnswer: "{#if}",
      explanation: "{#if} is the Svelte syntax for conditionals."
    },
    {
      type: "true-false",
      question: "Svelte supports slot content for component composition.",
      correctAnswer: true,
      explanation: "Svelte supports <slot> for content projection."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the $ prefix when using stores in Svelte?",
      options: ["To subscribe to the store's value", "To declare a store", "To make a variable reactive", "To create a writable store"],
      correctAnswer: "To subscribe to the store's value",
      explanation: "The $ prefix auto-subscribes to the store's value."
    },
    {
      type: "short-answer",
      question: "What does the onDestroy lifecycle function do?",
      correctAnswer: "Runs cleanup code when a component is destroyed",
      explanation: "onDestroy is for cleanup logic."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid Svelte store type?",
      options: ["writable", "readable", "derived", "observable"],
      correctAnswer: "observable",
      explanation: "observable is not a built-in Svelte store type."
    },
    {
      type: "true-false",
      question: "Svelte supports reactive statements that depend on multiple variables.",
      correctAnswer: true,
      explanation: "Reactive statements can depend on any referenced variable."
    },
    {
      type: "multiple-choice",
      question: "How do you create a reactive statement that runs when 'a' or 'b' changes?",
      options: ["$: c = a + b", "$: if (a || b)", "let c = $: a + b", "@reactive(a, b)"],
      correctAnswer: "$: c = a + b",
      explanation: "The $: label makes the statement reactive to dependencies."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the <slot> element in Svelte?",
      correctAnswer: "To allow content projection into a component",
      explanation: "<slot> enables component composition."
    },
    {
      type: "multiple-choice",
      question: "Which file extension is used for Svelte components?",
      options: [".svelte", ".jsx", ".vue", ".js"],
      correctAnswer: ".svelte",
      explanation: ".svelte is the file extension for Svelte components."
    },
    {
      type: "true-false",
      question: "Svelte supports TypeScript out of the box.",
      correctAnswer: true,
      explanation: "Svelte has built-in support for TypeScript."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of Svelte's compilation approach?",
      options: ["No runtime overhead", "Faster initial load", "Smaller bundle size", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "Svelte's compilation leads to no runtime, faster loads, and smaller bundles."
    }
  ],
  "Node.js & Express": [
    {
      type: "multiple-choice",
      question: "What is the main purpose of the 'require' function in Node.js?",
      options: ["To import modules", "To export modules", "To create HTTP servers", "To handle errors"],
      correctAnswer: "To import modules",
      explanation: "'require' is used to import modules in CommonJS."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to create a new Express application?",
      options: ["express()", "new Express()", "createApp()", "express.create()"],
      correctAnswer: "express()",
      explanation: "express() initializes a new Express app."
    },
    {
      type: "true-false",
      question: "Node.js is single-threaded but can handle concurrent connections via the event loop.",
      correctAnswer: true,
      explanation: "Node.js uses an event-driven, non-blocking I/O model."
    },
    {
      type: "multiple-choice",
      question: "Which module is used to work with file paths in Node.js?",
      options: ["fs", "path", "os", "url"],
      correctAnswer: "path",
      explanation: "The 'path' module provides utilities for file and directory paths."
    },
    {
      type: "short-answer",
      question: "What is middleware in Express?",
      correctAnswer: "A function that processes requests and responses in the app pipeline",
      explanation: "Middleware functions have access to req, res, and next."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is NOT supported by Express out of the box?",
      options: ["GET", "POST", "PATCH", "CONNECT"],
      correctAnswer: "CONNECT",
      explanation: "CONNECT is not a standard Express method."
    },
    {
      type: "true-false",
      question: "You can use async/await in Express route handlers.",
      correctAnswer: true,
      explanation: "Express supports async route handlers."
    },
    {
      type: "multiple-choice",
      question: "What does res.json() do in Express?",
      options: ["Sends a JSON response", "Parses JSON body", "Sets a cookie", "Renders a view"],
      correctAnswer: "Sends a JSON response",
      explanation: "res.json() sends a JSON-formatted response."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'next' function in Express middleware?",
      correctAnswer: "To pass control to the next middleware function",
      explanation: "Calling next() moves to the next middleware in the stack."
    },
    {
      type: "multiple-choice",
      question: "Which built-in Node.js module is used for creating HTTP servers?",
      options: ["http", "net", "url", "stream"],
      correctAnswer: "http",
      explanation: "The 'http' module is used to create HTTP servers."
    },
    {
      type: "true-false",
      question: "Express supports route parameters using the :param syntax.",
      correctAnswer: true,
      explanation: "Route parameters are defined with a colon in Express."
    },
    {
      type: "multiple-choice",
      question: "What is the default port for a Node.js HTTP server if not specified?",
      options: ["80", "3000", "8080", "No default"],
      correctAnswer: "No default",
      explanation: "You must specify a port; there is no default."
    },
    {
      type: "short-answer",
      question: "How do you handle errors in Express middleware?",
      correctAnswer: "By defining middleware with four arguments (err, req, res, next)",
      explanation: "Error-handling middleware has four parameters."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to serve static files in Express?",
      options: ["express.static", "express.serve", "app.static", "app.serve"],
      correctAnswer: "express.static",
      explanation: "express.static is used to serve static assets."
    },
    {
      type: "true-false",
      question: "Node.js supports ES modules (import/export) natively in recent versions.",
      correctAnswer: true,
      explanation: "ES modules are supported with .mjs or 'type': 'module' in package.json."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of process.env in Node.js?",
      options: ["To access environment variables", "To manage processes", "To handle events", "To create child processes"],
      correctAnswer: "To access environment variables",
      explanation: "process.env provides access to environment variables."
    },
    {
      type: "short-answer",
      question: "What is the difference between res.send and res.json in Express?",
      correctAnswer: "res.send sends any type, res.json sends JSON only",
      explanation: "res.json stringifies the object, res.send can send any type."
    },
    {
      type: "multiple-choice",
      question: "Which event is emitted when a Node.js process exits?",
      options: ["exit", "close", "end", "finish"],
      correctAnswer: "exit",
      explanation: "The 'exit' event is emitted when the process exits."
    },
    {
      type: "true-false",
      question: "Express can be used to build RESTful APIs as well as web applications.",
      correctAnswer: true,
      explanation: "Express is flexible for APIs and web apps."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to parse JSON request bodies in Express 4.16+?",
      options: ["express.json()", "bodyParser.json()", "app.json()", "express.parseJSON()"],
      correctAnswer: "express.json()",
      explanation: "express.json() is the built-in middleware for JSON parsing."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the cluster module in Node.js?",
      correctAnswer: "To enable load balancing and multi-core usage",
      explanation: "The cluster module allows Node.js to use multiple CPU cores."
    }
  ],
  "Django Web Development": [
    {
      type: "multiple-choice",
      question: "What is the purpose of Django's ORM?",
      options: ["To manage static files", "To map database tables to Python objects", "To handle HTTP requests", "To render templates"],
      correctAnswer: "To map database tables to Python objects",
      explanation: "Django's ORM maps models to database tables."
    },
    {
      type: "multiple-choice",
      question: "Which command creates a new Django project?",
      options: ["django-admin startproject", "django-admin startapp", "python manage.py runserver", "django-admin makemigrations"],
      correctAnswer: "django-admin startproject",
      explanation: "startproject creates a new Django project."
    },
    {
      type: "true-false",
      question: "Django uses a Model-View-Template (MVT) architecture.",
      correctAnswer: true,
      explanation: "Django's architecture is MVT, similar to MVC."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'migrate' command in Django?",
      options: ["To create migrations", "To apply migrations to the database", "To start the server", "To create a superuser"],
      correctAnswer: "To apply migrations to the database",
      explanation: "'migrate' applies schema changes to the database."
    },
    {
      type: "short-answer",
      question: "What is a Django model?",
      correctAnswer: "A Python class that defines the structure of a database table",
      explanation: "Models define database schema in Django."
    },
    {
      type: "multiple-choice",
      question: "Which file contains the URL configuration in a Django app?",
      options: ["urls.py", "views.py", "models.py", "settings.py"],
      correctAnswer: "urls.py",
      explanation: "urls.py defines URL patterns for routing."
    },
    {
      type: "true-false",
      question: "Django's admin interface is enabled by default after project creation.",
      correctAnswer: false,
      explanation: "You must create a superuser and register models to use the admin."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'settings.py' file?",
      options: ["To define database models", "To configure project settings", "To handle HTTP requests", "To render templates"],
      correctAnswer: "To configure project settings",
      explanation: "settings.py contains configuration for the Django project."
    },
    {
      type: "short-answer",
      question: "What is a Django view?",
      correctAnswer: "A function or class that handles HTTP requests and returns responses",
      explanation: "Views process requests and return responses."
    },
    {
      type: "multiple-choice",
      question: "Which template language is used by default in Django?",
      options: ["Jinja2", "Django Template Language", "Mako", "Mustache"],
      correctAnswer: "Django Template Language",
      explanation: "Django uses its own template language by default."
    },
    {
      type: "true-false",
      question: "Django supports both function-based and class-based views.",
      correctAnswer: true,
      explanation: "You can use either function-based or class-based views in Django."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'makemigrations' command?",
      options: ["To apply migrations", "To create new migration files", "To start the server", "To create a new app"],
      correctAnswer: "To create new migration files",
      explanation: "makemigrations creates migration files for model changes."
    },
    {
      type: "short-answer",
      question: "What is a Django form?",
      correctAnswer: "A class for handling user input and validation",
      explanation: "Forms handle input and validation in Django."
    },
    {
      type: "multiple-choice",
      question: "Which decorator is used to restrict access to authenticated users?",
      options: ["@login_required", "@require_POST", "@csrf_exempt", "@staff_member_required"],
      correctAnswer: "@login_required",
      explanation: "@login_required restricts view access to logged-in users."
    },
    {
      type: "true-false",
      question: "Django's ORM supports transactions and rollbacks.",
      correctAnswer: true,
      explanation: "Django ORM supports atomic transactions."
    },
    {
      type: "multiple-choice",
      question: "What is the default database engine for new Django projects?",
      options: ["PostgreSQL", "MySQL", "SQLite", "Oracle"],
      correctAnswer: "SQLite",
      explanation: "SQLite is the default database for new Django projects."
    },
    {
      type: "short-answer",
      question: "What is a Django migration?",
      correctAnswer: "A file that records changes to models and database schema",
      explanation: "Migrations track and apply schema changes."
    },
    {
      type: "multiple-choice",
      question: "Which command creates a new Django app?",
      options: ["django-admin startapp", "django-admin startproject", "python manage.py runserver", "django-admin makemigrations"],
      correctAnswer: "django-admin startapp",
      explanation: "startapp creates a new Django app."
    },
    {
      type: "true-false",
      question: "Django supports middleware for request/response processing.",
      correctAnswer: true,
      explanation: "Django uses middleware for processing requests and responses."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'collectstatic' command?",
      options: ["To collect static files for deployment", "To collect database migrations", "To collect user input", "To collect logs"],
      correctAnswer: "To collect static files for deployment",
      explanation: "collectstatic gathers static files for production deployment."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'manage.py' file?",
      correctAnswer: "A command-line utility for managing Django projects",
      explanation: "manage.py is used to run commands for Django projects."
    }
  ],
  "RESTful API Design": [
    {
      type: "multiple-choice",
      question: "What does REST stand for?",
      options: ["Representational State Transfer", "Remote Execution Service Technology", "Resource Endpoint Service Transfer", "Relational State Transfer"],
      correctAnswer: "Representational State Transfer",
      explanation: "REST stands for Representational State Transfer."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is idempotent?",
      options: ["POST", "PUT", "PATCH", "CONNECT"],
      correctAnswer: "PUT",
      explanation: "PUT is idempotent; multiple identical requests have the same effect."
    },
    {
      type: "true-false",
      question: "A RESTful API should use nouns for resource URIs, not verbs.",
      correctAnswer: true,
      explanation: "Resource URIs should be nouns representing entities."
    },
    {
      type: "multiple-choice",
      question: "Which status code indicates a successful resource creation?",
      options: ["200", "201", "204", "400"],
      correctAnswer: "201",
      explanation: "201 Created is used for successful resource creation."
    },
    {
      type: "short-answer",
      question: "What is HATEOAS in REST?",
      correctAnswer: "Hypermedia as the Engine of Application State",
      explanation: "HATEOAS is a constraint of REST for discoverability via links."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is typically used to partially update a resource?",
      options: ["PUT", "PATCH", "POST", "DELETE"],
      correctAnswer: "PATCH",
      explanation: "PATCH is used for partial updates."
    },
    {
      type: "true-false",
      question: "GET requests should have side effects on server state.",
      correctAnswer: false,
      explanation: "GET should be safe and not modify server state."
    },
    {
      type: "multiple-choice",
      question: "Which status code indicates a client error due to invalid input?",
      options: ["400", "401", "403", "404"],
      correctAnswer: "400",
      explanation: "400 Bad Request is for invalid client input."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the OPTIONS HTTP method?",
      correctAnswer: "To describe communication options for the target resource",
      explanation: "OPTIONS returns allowed methods and CORS info."
    },
    {
      type: "multiple-choice",
      question: "Which header is used for API versioning in REST?",
      options: ["Accept", "X-API-Version", "Authorization", "Content-Type"],
      correctAnswer: "X-API-Version",
      explanation: "X-API-Version is a common custom header for versioning."
    },
    {
      type: "true-false",
      question: "A RESTful API should always return 200 OK for successful requests, regardless of the operation.",
      correctAnswer: false,
      explanation: "Use the most specific status code for the operation."
    },
    {
      type: "multiple-choice",
      question: "Which status code indicates a resource was not found?",
      options: ["400", "401", "403", "404"],
      correctAnswer: "404",
      explanation: "404 Not Found is for missing resources."
    },
    {
      type: "short-answer",
      question: "What is content negotiation in REST?",
      correctAnswer: "The process of selecting the best representation for a response",
      explanation: "Content negotiation uses headers like Accept to choose formats."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is NOT safe?",
      options: ["GET", "HEAD", "OPTIONS", "DELETE"],
      correctAnswer: "DELETE",
      explanation: "DELETE is not safe; it modifies server state."
    },
    {
      type: "true-false",
      question: "PUT requests should be used to create resources if the client can specify the URI.",
      correctAnswer: true,
      explanation: "PUT can create or replace a resource at a known URI."
    },
    {
      type: "multiple-choice",
      question: "Which status code indicates a successful request with no content in the response?",
      options: ["200", "201", "204", "304"],
      correctAnswer: "204",
      explanation: "204 No Content is for successful requests with no body."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the Location header in a 201 response?",
      correctAnswer: "To provide the URI of the newly created resource",
      explanation: "Location header gives the new resource's URI."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is used to retrieve resource metadata only?",
      options: ["GET", "HEAD", "OPTIONS", "TRACE"],
      correctAnswer: "HEAD",
      explanation: "HEAD returns headers only, no body."
    },
    {
      type: "true-false",
      question: "RESTful APIs should use plural nouns for resource URIs.",
      correctAnswer: true,
      explanation: "Plural nouns are a best practice for resource URIs."
    },
    {
      type: "multiple-choice",
      question: "Which status code indicates a request was successful but the response is cached?",
      options: ["200", "201", "304", "400"],
      correctAnswer: "304",
      explanation: "304 Not Modified is for cached responses."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of statelessness in REST?",
      correctAnswer: "Each request contains all information needed, improving scalability",
      explanation: "Statelessness allows easy scaling and reliability."
    }
  ],
  "MongoDB & NoSQL Databases": [
    {
      type: "multiple-choice",
      question: "What is the primary data structure used by MongoDB to store documents?",
      options: ["Array", "BSON", "JSON", "Table"],
      correctAnswer: "BSON",
      explanation: "MongoDB stores documents in BSON, a binary JSON format."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid MongoDB data type?",
      options: ["String", "Date", "Tuple", "ObjectId"],
      correctAnswer: "Tuple",
      explanation: "Tuple is not a MongoDB data type."
    },
    {
      type: "true-false",
      question: "MongoDB supports transactions across multiple documents and collections.",
      correctAnswer: true,
      explanation: "MongoDB supports multi-document ACID transactions in replica sets."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to create an index in MongoDB?",
      options: ["db.collection.ensureIndex()", "db.collection.createIndex()", "db.createIndex()", "db.ensureIndex()"],
      correctAnswer: "db.collection.createIndex()",
      explanation: "createIndex() is the standard method for creating indexes."
    },
    {
      type: "short-answer",
      question: "What is a replica set in MongoDB?",
      correctAnswer: "A group of mongod processes that maintain the same data set",
      explanation: "Replica sets provide redundancy and high availability."
    },
    {
      type: "multiple-choice",
      question: "Which aggregation stage is used to filter documents?",
      options: ["$match", "$group", "$project", "$sort"],
      correctAnswer: "$match",
      explanation: "$match filters documents in the aggregation pipeline."
    },
    {
      type: "true-false",
      question: "MongoDB enforces a fixed schema for all documents in a collection.",
      correctAnswer: false,
      explanation: "MongoDB collections are schema-less by default."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum size of a single MongoDB document?",
      options: ["1 MB", "4 MB", "16 MB", "64 MB"],
      correctAnswer: "16 MB",
      explanation: "MongoDB documents are limited to 16 MB."
    },
    {
      type: "short-answer",
      question: "What is sharding in MongoDB?",
      correctAnswer: "A method for distributing data across multiple servers",
      explanation: "Sharding enables horizontal scaling in MongoDB."
    },
    {
      type: "multiple-choice",
      question: "Which operator is used for pattern matching in MongoDB queries?",
      options: ["$like", "$regex", "$pattern", "$search"],
      correctAnswer: "$regex",
      explanation: "$regex is used for pattern matching."
    },
    {
      type: "true-false",
      question: "MongoDB supports geospatial queries.",
      correctAnswer: true,
      explanation: "MongoDB has built-in support for geospatial data and queries."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to back up a MongoDB database?",
      options: ["mongodump", "mongobackup", "mongoexport", "mongosave"],
      correctAnswer: "mongodump",
      explanation: "mongodump creates a binary backup of a database."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the _id field in MongoDB documents?",
      correctAnswer: "To uniquely identify each document in a collection",
      explanation: "_id is the primary key for MongoDB documents."
    },
    {
      type: "multiple-choice",
      question: "Which NoSQL database type is MongoDB?",
      options: ["Key-value store", "Document store", "Column store", "Graph database"],
      correctAnswer: "Document store",
      explanation: "MongoDB is a document-oriented NoSQL database."
    },
    {
      type: "true-false",
      question: "MongoDB supports ACID transactions for single-document operations.",
      correctAnswer: true,
      explanation: "Single-document operations are always atomic in MongoDB."
    },
    {
      type: "multiple-choice",
      question: "Which aggregation stage is used to reshape documents?",
      options: ["$project", "$group", "$unwind", "$sort"],
      correctAnswer: "$project",
      explanation: "$project reshapes documents in the pipeline."
    },
    {
      type: "short-answer",
      question: "What is a capped collection in MongoDB?",
      correctAnswer: "A fixed-size collection that overwrites oldest documents when full",
      explanation: "Capped collections are useful for logs and queues."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to restore a MongoDB database from a backup?",
      options: ["mongorestore", "mongoload", "mongoimport", "mongorecover"],
      correctAnswer: "mongorestore",
      explanation: "mongorestore restores a database from a mongodump backup."
    },
    {
      type: "true-false",
      question: "MongoDB supports TTL (Time To Live) indexes for automatic document expiration.",
      correctAnswer: true,
      explanation: "TTL indexes automatically remove expired documents."
    },
    {
      type: "multiple-choice",
      question: "Which operator is used to update only specific fields in a document?",
      options: ["$set", "$update", "$replace", "$modify"],
      correctAnswer: "$set",
      explanation: "$set updates specific fields in a document."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the aggregation pipeline in MongoDB?",
      correctAnswer: "To process and transform data through multiple stages",
      explanation: "The aggregation pipeline allows complex data processing."
    }
  ],
  "Fullstack MERN Bootcamp": [
    {
      type: "multiple-choice",
      question: "What does MERN stand for?",
      options: ["MongoDB, Express, React, Node.js", "MySQL, Express, React, Node.js", "MongoDB, Ember, React, Node.js", "MongoDB, Express, Redux, Node.js"],
      correctAnswer: "MongoDB, Express, React, Node.js",
      explanation: "MERN is a stack of MongoDB, Express, React, and Node.js."
    },
    {
      type: "multiple-choice",
      question: "Which part of the MERN stack handles client-side routing?",
      options: ["Express", "React", "Node.js", "MongoDB"],
      correctAnswer: "React",
      explanation: "React Router is used for client-side routing."
    },
    {
      type: "true-false",
      question: "Express is used to build RESTful APIs in the MERN stack.",
      correctAnswer: true,
      explanation: "Express is the backend framework for APIs in MERN."
    },
    {
      type: "multiple-choice",
      question: "Which library is commonly used for state management in large MERN apps?",
      options: ["Redux", "Mongoose", "Jest", "Axios"],
      correctAnswer: "Redux",
      explanation: "Redux is a popular state management library for React."
    },
    {
      type: "short-answer",
      question: "What is Mongoose used for in a MERN app?",
      correctAnswer: "To model and interact with MongoDB in Node.js",
      explanation: "Mongoose is an ODM for MongoDB."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is used to update a resource in a RESTful MERN API?",
      options: ["GET", "POST", "PUT", "DELETE"],
      correctAnswer: "PUT",
      explanation: "PUT is used for updating resources."
    },
    {
      type: "true-false",
      question: "React components can fetch data directly from MongoDB.",
      correctAnswer: false,
      explanation: "React fetches data from the backend API, not directly from MongoDB."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used to test API endpoints in a MERN app?",
      options: ["Postman", "Webpack", "Babel", "Nodemon"],
      correctAnswer: "Postman",
      explanation: "Postman is used for API testing."
    },
    {
      type: "short-answer",
      question: "What is the purpose of CORS in a MERN application?",
      correctAnswer: "To allow or restrict cross-origin HTTP requests",
      explanation: "CORS controls which domains can access the API."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid MongoDB query method in Mongoose?",
      options: ["find()", "findById()", "findAll()", "findOne()"],
      correctAnswer: "findAll()",
      explanation: "findAll() is not a Mongoose method."
    },
    {
      type: "true-false",
      question: "Node.js can be used to serve both the frontend and backend in a MERN app.",
      correctAnswer: true,
      explanation: "Node.js can serve static files and APIs."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to start a React development server?",
      options: ["npm start", "npm run dev", "node server.js", "npm build"],
      correctAnswer: "npm start",
      explanation: "npm start runs the React dev server."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using JWTs in a MERN app?",
      correctAnswer: "To securely transmit authentication information",
      explanation: "JWTs are used for stateless authentication."
    },
    {
      type: "multiple-choice",
      question: "Which middleware is used to parse JSON request bodies in Express?",
      options: ["express.json()", "bodyParser.json()", "express.body()", "jsonParser()"],
      correctAnswer: "express.json()",
      explanation: "express.json() parses JSON bodies in Express 4.16+."
    },
    {
      type: "true-false",
      question: "Redux can be used with both class and functional React components.",
      correctAnswer: true,
      explanation: "Redux works with both component types."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a common pattern for organizing a MERN project?",
      options: ["Monorepo", "Microservices", "MVC", "MVVM"],
      correctAnswer: "MVC",
      explanation: "MVC (Model-View-Controller) is common in MERN apps."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the useEffect hook in React?",
      correctAnswer: "To perform side effects in function components",
      explanation: "useEffect handles data fetching, subscriptions, etc."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used to automatically restart a Node.js server on file changes?",
      options: ["Nodemon", "Webpack", "Babel", "PM2"],
      correctAnswer: "Nodemon",
      explanation: "Nodemon restarts Node.js on file changes."
    },
    {
      type: "true-false",
      question: "MERN apps can be deployed to cloud platforms like Heroku or AWS.",
      correctAnswer: true,
      explanation: "MERN apps are commonly deployed to cloud platforms."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a benefit of using the MERN stack?",
      options: ["Full JavaScript stack", "Strong community support", "Native mobile development", "Rapid prototyping"],
      correctAnswer: "Native mobile development",
      explanation: "MERN is for web apps, not native mobile."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using a single language (JavaScript) across the MERN stack?",
      correctAnswer: "Consistency and easier knowledge transfer between frontend and backend",
      explanation: "Using JavaScript everywhere simplifies development."
    }
  ],
  "PostgreSQL & Relational Databases": [
    {
      type: "multiple-choice",
      question: "What is the default port for PostgreSQL?",
      options: ["3306", "5432", "1521", "27017"],
      correctAnswer: "5432",
      explanation: "5432 is the default port for PostgreSQL."
    },
    {
      type: "multiple-choice",
      question: "Which SQL command is used to create a new table?",
      options: ["CREATE TABLE", "ADD TABLE", "NEW TABLE", "MAKE TABLE"],
      correctAnswer: "CREATE TABLE",
      explanation: "CREATE TABLE is the standard SQL command."
    },
    {
      type: "true-false",
      question: "PostgreSQL supports JSON data types.",
      correctAnswer: true,
      explanation: "PostgreSQL supports both JSON and JSONB types."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to remove duplicate rows in a SELECT query?",
      options: ["UNIQUE", "DISTINCT", "REMOVE DUPLICATES", "ONLY"],
      correctAnswer: "DISTINCT",
      explanation: "DISTINCT removes duplicate rows."
    },
    {
      type: "short-answer",
      question: "What is a primary key?",
      correctAnswer: "A unique identifier for each row in a table",
      explanation: "Primary keys uniquely identify rows."
    },
    {
      type: "multiple-choice",
      question: "Which SQL clause is used to filter results?",
      options: ["WHERE", "ORDER BY", "GROUP BY", "HAVING"],
      correctAnswer: "WHERE",
      explanation: "WHERE filters rows in a query."
    },
    {
      type: "true-false",
      question: "PostgreSQL supports window functions.",
      correctAnswer: true,
      explanation: "Window functions are supported in PostgreSQL."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to grant privileges to a user?",
      options: ["GRANT", "ALLOW", "PERMIT", "GIVE"],
      correctAnswer: "GRANT",
      explanation: "GRANT gives privileges to users."
    },
    {
      type: "short-answer",
      question: "What is a foreign key?",
      correctAnswer: "A field that links to the primary key of another table",
      explanation: "Foreign keys enforce referential integrity."
    },
    {
      type: "multiple-choice",
      question: "Which isolation level is the default in PostgreSQL?",
      options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
      correctAnswer: "READ COMMITTED",
      explanation: "READ COMMITTED is the default isolation level."
    },
    {
      type: "true-false",
      question: "PostgreSQL supports full-text search.",
      correctAnswer: true,
      explanation: "Full-text search is a feature of PostgreSQL."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to backup a PostgreSQL database?",
      options: ["pg_dump", "pg_backup", "pg_save", "pg_export"],
      correctAnswer: "pg_dump",
      explanation: "pg_dump is the standard backup tool."
    },
    {
      type: "short-answer",
      question: "What is normalization?",
      correctAnswer: "The process of organizing data to reduce redundancy",
      explanation: "Normalization reduces data duplication."
    },
    {
      type: "multiple-choice",
      question: "Which SQL statement is used to change data in a table?",
      options: ["UPDATE", "ALTER", "MODIFY", "CHANGE"],
      correctAnswer: "UPDATE",
      explanation: "UPDATE modifies existing rows."
    },
    {
      type: "true-false",
      question: "PostgreSQL supports array data types.",
      correctAnswer: true,
      explanation: "Arrays are supported as a column type."
    },
    {
      type: "multiple-choice",
      question: "Which function returns the current date and time in PostgreSQL?",
      options: ["NOW()", "CURRENT_DATE()", "GETDATE()", "DATE()"],
      correctAnswer: "NOW()",
      explanation: "NOW() returns the current timestamp."
    },
    {
      type: "short-answer",
      question: "What is a view in SQL?",
      correctAnswer: "A virtual table based on a query",
      explanation: "Views are saved queries that act like tables."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to remove a table?",
      options: ["DROP TABLE", "DELETE TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
      correctAnswer: "DROP TABLE",
      explanation: "DROP TABLE deletes the table structure and data."
    },
    {
      type: "true-false",
      question: "PostgreSQL supports user-defined functions written in multiple languages.",
      correctAnswer: true,
      explanation: "You can write functions in PL/pgSQL, Python, etc."
    },
    {
      type: "multiple-choice",
      question: "Which SQL keyword is used to combine rows from two or more tables?",
      options: ["JOIN", "MERGE", "COMBINE", "UNION"],
      correctAnswer: "JOIN",
      explanation: "JOIN combines rows from multiple tables."
    },
    {
      type: "short-answer",
      question: "What is a transaction in SQL?",
      correctAnswer: "A sequence of operations performed as a single logical unit",
      explanation: "Transactions ensure atomicity, consistency, isolation, durability."
    }
  ],
  "Flask for Web Apps": [
    {
      type: "multiple-choice",
      question: "What is the default port for Flask development server?",
      options: ["5000", "8000", "8080", "3000"],
      correctAnswer: "5000",
      explanation: "Flask runs on port 5000 by default."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to start a Flask app?",
      options: ["flask run", "python run.py", "flask start", "python app.py start"],
      correctAnswer: "flask run",
      explanation: "'flask run' starts the Flask development server."
    },
    {
      type: "true-false",
      question: "Flask is a micro web framework for Python.",
      correctAnswer: true,
      explanation: "Flask is lightweight and minimal."
    },
    {
      type: "multiple-choice",
      question: "Which file is used to define routes in a typical Flask app?",
      options: ["app.py", "routes.py", "views.py", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "Routes can be defined in any Python file, but app.py is common."
    },
    {
      type: "short-answer",
      question: "What is a Flask blueprint?",
      correctAnswer: "A way to organize routes and handlers into reusable modules",
      explanation: "Blueprints help modularize large Flask apps."
    },
    {
      type: "multiple-choice",
      question: "Which decorator is used to define a route in Flask?",
      options: ["@route", "@app.route", "@flask.route", "@url.route"],
      correctAnswer: "@app.route",
      explanation: "@app.route is used to define routes."
    },
    {
      type: "true-false",
      question: "Flask supports Jinja2 templating by default.",
      correctAnswer: true,
      explanation: "Jinja2 is the default template engine for Flask."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to access form data in Flask?",
      options: ["request.form", "request.data", "request.input", "request.body"],
      correctAnswer: "request.form",
      explanation: "request.form accesses POSTed form data."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Flask's 'flash' function?",
      correctAnswer: "To send one-time messages to the next request",
      explanation: "flash() is used for temporary messages."
    },
    {
      type: "multiple-choice",
      question: "Which extension is used for database integration in Flask?",
      options: ["Flask-SQLAlchemy", "Flask-DB", "Flask-ORM", "Flask-Database"],
      correctAnswer: "Flask-SQLAlchemy",
      explanation: "Flask-SQLAlchemy is the most popular ORM extension."
    },
    {
      type: "true-false",
      question: "Flask supports middleware via WSGI.",
      correctAnswer: true,
      explanation: "Flask is WSGI-compliant and supports middleware."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to redirect in Flask?",
      options: ["redirect()", "goto()", "move()", "route()"],
      correctAnswer: "redirect()",
      explanation: "redirect() sends a redirect response."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Flask's 'g' object?",
      correctAnswer: "To store data during a request lifecycle",
      explanation: "'g' is a global namespace for request-specific data."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP method is NOT supported by Flask route decorators?",
      options: ["GET", "POST", "PUT", "CONNECT"],
      correctAnswer: "CONNECT",
      explanation: "CONNECT is not a standard method for Flask routes."
    },
    {
      type: "true-false",
      question: "Flask can serve static files out of the box.",
      correctAnswer: true,
      explanation: "Flask serves static files from the 'static' folder."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to render templates in Flask?",
      options: ["render_template()", "show_template()", "display()", "template()"],
      correctAnswer: "render_template()",
      explanation: "render_template() renders Jinja2 templates."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Flask's 'session' object?",
      correctAnswer: "To store data across requests for a user",
      explanation: "session is used for per-user data storage."
    },
    {
      type: "multiple-choice",
      question: "Which extension is used for user authentication in Flask?",
      options: ["Flask-Login", "Flask-Auth", "Flask-User", "Flask-Security"],
      correctAnswer: "Flask-Login",
      explanation: "Flask-Login is a popular authentication extension."
    },
    {
      type: "true-false",
      question: "Flask supports RESTful APIs via Flask-RESTful or similar extensions.",
      correctAnswer: true,
      explanation: "Flask-RESTful and others add API support."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to install Flask via pip?",
      options: ["pip install flask", "pip flask install", "flask install", "python -m flask install"],
      correctAnswer: "pip install flask",
      explanation: "pip install flask is the correct command."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Flask's 'abort' function?",
      correctAnswer: "To raise an HTTP error response",
      explanation: "abort() raises HTTP errors like 404, 403, etc."
    }
  ],
  "Ruby on Rails": [
    {
      type: "multiple-choice",
      question: "What is the default ORM used by Ruby on Rails?",
      options: ["ActiveRecord", "Sequel", "DataMapper", "Mongoid"],
      correctAnswer: "ActiveRecord",
      explanation: "ActiveRecord is the default ORM in Rails."
    },
    {
      type: "multiple-choice",
      question: "Which command creates a new Rails project?",
      options: ["rails new", "rails create", "rails init", "rails start"],
      correctAnswer: "rails new",
      explanation: "'rails new' initializes a new Rails project."
    },
    {
      type: "true-false",
      question: "Rails uses the Model-View-Controller (MVC) architecture.",
      correctAnswer: true,
      explanation: "Rails is based on the MVC pattern."
    },
    {
      type: "multiple-choice",
      question: "Which file defines routes in a Rails application?",
      options: ["routes.rb", "app.rb", "config.rb", "router.rb"],
      correctAnswer: "routes.rb",
      explanation: "config/routes.rb defines routes in Rails."
    },
    {
      type: "short-answer",
      question: "What is a migration in Rails?",
      correctAnswer: "A script for changing the database schema",
      explanation: "Migrations manage schema changes."
    },
    {
      type: "multiple-choice",
      question: "Which command runs database migrations in Rails?",
      options: ["rails db:migrate", "rails migrate", "rails run:migrations", "rails db:update"],
      correctAnswer: "rails db:migrate",
      explanation: "'rails db:migrate' applies migrations."
    },
    {
      type: "true-false",
      question: "Rails supports both SQL and NoSQL databases out of the box.",
      correctAnswer: false,
      explanation: "Rails is designed for SQL databases by default."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to validate presence of a field in a Rails model?",
      options: ["validates_presence_of", "validate", "require", "presence"],
      correctAnswer: "validates_presence_of",
      explanation: "validates_presence_of checks for presence."
    },
    {
      type: "short-answer",
      question: "What is a Rails controller?",
      correctAnswer: "A class that handles HTTP requests and responses",
      explanation: "Controllers process requests and return responses."
    },
    {
      type: "multiple-choice",
      question: "Which command starts the Rails development server?",
      options: ["rails server", "rails start", "rails run", "rails dev"],
      correctAnswer: "rails server",
      explanation: "'rails server' starts the dev server."
    },
    {
      type: "true-false",
      question: "Rails supports RESTful routing by default.",
      correctAnswer: true,
      explanation: "RESTful routing is a core feature of Rails."
    },
    {
      type: "multiple-choice",
      question: "Which file contains environment-specific settings in Rails?",
      options: ["environments/*.rb", "settings.rb", "env.rb", "config.rb"],
      correctAnswer: "environments/*.rb",
      explanation: "config/environments/*.rb holds environment configs."
    },
    {
      type: "short-answer",
      question: "What is a Rails view?",
      correctAnswer: "A template for rendering HTML to the user",
      explanation: "Views generate the HTML output."
    },
    {
      type: "multiple-choice",
      question: "Which command generates a new model in Rails?",
      options: ["rails generate model", "rails new model", "rails create model", "rails make:model"],
      correctAnswer: "rails generate model",
      explanation: "'rails generate model' creates a new model."
    },
    {
      type: "true-false",
      question: "Rails supports asset pipeline for managing CSS and JS files.",
      correctAnswer: true,
      explanation: "The asset pipeline manages static assets."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to define associations in Rails models?",
      options: ["has_many", "associate", "link_to", "connect"],
      correctAnswer: "has_many",
      explanation: "has_many defines associations."
    },
    {
      type: "short-answer",
      question: "What is a partial in Rails views?",
      correctAnswer: "A reusable view template fragment",
      explanation: "Partials are used for reusable view code."
    },
    {
      type: "multiple-choice",
      question: "Which command rolls back the last migration in Rails?",
      options: ["rails db:rollback", "rails rollback", "rails db:undo", "rails migrate:down"],
      correctAnswer: "rails db:rollback",
      explanation: "'rails db:rollback' undoes the last migration."
    },
    {
      type: "true-false",
      question: "Rails supports background jobs via Active Job framework.",
      correctAnswer: true,
      explanation: "Active Job provides background job support."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to install Rails as a gem?",
      options: ["gem install rails", "rails install", "bundle install rails", "rails gem install"],
      correctAnswer: "gem install rails",
      explanation: "'gem install rails' installs Rails."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'routes.rb' file?",
      correctAnswer: "To define URL patterns and route requests to controllers",
      explanation: "routes.rb maps URLs to controller actions."
    }
  ],
  "Spring Boot for Java": [
    {
      type: "multiple-choice",
      question: "What is the main purpose of Spring Boot?",
      options: ["To simplify Spring application setup", "To replace Java EE", "To provide a new JVM", "To manage databases"],
      correctAnswer: "To simplify Spring application setup",
      explanation: "Spring Boot reduces configuration and setup for Spring apps."
    },
    {
      type: "multiple-choice",
      question: "Which annotation marks a Spring Boot application entry point?",
      options: ["@SpringBootApplication", "@SpringApplication", "@SpringEntry", "@BootApp"],
      correctAnswer: "@SpringBootApplication",
      explanation: "@SpringBootApplication is the main entry annotation."
    },
    {
      type: "true-false",
      question: "Spring Boot uses embedded servers by default.",
      correctAnswer: true,
      explanation: "Spring Boot apps run with embedded Tomcat, Jetty, or Undertow."
    },
    {
      type: "multiple-choice",
      question: "Which file is used for configuration in Spring Boot?",
      options: ["application.properties", "config.xml", "settings.json", "spring.xml"],
      correctAnswer: "application.properties",
      explanation: "application.properties or application.yml is used for config."
    },
    {
      type: "short-answer",
      question: "What is dependency injection?",
      correctAnswer: "A technique for providing objects their dependencies",
      explanation: "DI is a core concept in Spring."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to define a REST controller?",
      options: ["@RestController", "@Controller", "@ApiController", "@WebController"],
      correctAnswer: "@RestController",
      explanation: "@RestController is used for REST APIs."
    },
    {
      type: "true-false",
      question: "Spring Boot supports auto-configuration.",
      correctAnswer: true,
      explanation: "Auto-configuration is a key feature of Spring Boot."
    },
    {
      type: "multiple-choice",
      question: "Which starter dependency is used for building web applications?",
      options: ["spring-boot-starter-web", "spring-boot-starter-data", "spring-boot-starter-jdbc", "spring-boot-starter-test"],
      correctAnswer: "spring-boot-starter-web",
      explanation: "spring-boot-starter-web is for web apps."
    },
    {
      type: "short-answer",
      question: "What is the purpose of @Autowired annotation?",
      correctAnswer: "To inject dependencies automatically",
      explanation: "@Autowired wires beans automatically."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to map HTTP GET requests?",
      options: ["@GetMapping", "@RequestMapping", "@Get", "@HttpGet"],
      correctAnswer: "@GetMapping",
      explanation: "@GetMapping is for GET requests."
    },
    {
      type: "true-false",
      question: "Spring Boot supports embedded databases like H2.",
      correctAnswer: true,
      explanation: "Embedded databases are supported for dev/testing."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to handle exceptions globally?",
      options: ["@ControllerAdvice", "@ExceptionHandler", "@ErrorHandler", "@GlobalException"],
      correctAnswer: "@ControllerAdvice",
      explanation: "@ControllerAdvice is for global exception handling."
    },
    {
      type: "short-answer",
      question: "What is a bean in Spring?",
      correctAnswer: "An object managed by the Spring IoC container",
      explanation: "Beans are the building blocks of Spring apps."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to schedule tasks in Spring Boot?",
      options: ["@Scheduled", "@Task", "@Cron", "@Timer"],
      correctAnswer: "@Scheduled",
      explanation: "@Scheduled is for scheduled tasks."
    },
    {
      type: "true-false",
      question: "Spring Boot supports hot reloading with DevTools.",
      correctAnswer: true,
      explanation: "DevTools enables hot reloading."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to inject values from properties files?",
      options: ["@Value", "@Property", "@ConfigValue", "@InjectValue"],
      correctAnswer: "@Value",
      explanation: "@Value injects property values."
    },
    {
      type: "short-answer",
      question: "What is the purpose of @SpringBootTest annotation?",
      correctAnswer: "To test Spring Boot applications with full context",
      explanation: "@SpringBootTest loads the full application context for tests."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to enable JPA repositories?",
      options: ["@EnableJpaRepositories", "@EnableRepositories", "@JpaRepositories", "@RepositoryEnable"],
      correctAnswer: "@EnableJpaRepositories",
      explanation: "@EnableJpaRepositories enables JPA repo support."
    },
    {
      type: "true-false",
      question: "Spring Boot can package applications as executable JARs.",
      correctAnswer: true,
      explanation: "Spring Boot apps can be run as JARs."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used to define a configuration class?",
      options: ["@Configuration", "@Config", "@AppConfig", "@SpringConfig"],
      correctAnswer: "@Configuration",
      explanation: "@Configuration marks config classes."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the application.properties file?",
      correctAnswer: "To configure application settings and properties",
      explanation: "application.properties holds config values."
    }
  ],
  "API Security & OAuth": [
    {
      type: "multiple-choice",
      question: "What does OAuth stand for?",
      options: ["Open Authorization", "Online Authentication", "Open Access", "OAuth is not an acronym"],
      correctAnswer: "Open Authorization",
      explanation: "OAuth stands for Open Authorization."
    },
    {
      type: "multiple-choice",
      question: "Which OAuth 2.0 flow is recommended for single-page applications?",
      options: ["Authorization Code with PKCE", "Implicit", "Client Credentials", "Resource Owner Password"],
      correctAnswer: "Authorization Code with PKCE",
      explanation: "PKCE is recommended for public clients like SPAs."
    },
    {
      type: "true-false",
      question: "JWTs can be used as OAuth access tokens.",
      correctAnswer: true,
      explanation: "JWTs are commonly used as access tokens in OAuth."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP header is used to send a bearer token?",
      options: ["Authorization", "Token", "Bearer", "X-Access-Token"],
      correctAnswer: "Authorization",
      explanation: "The Authorization header is used for bearer tokens."
    },
    {
      type: "short-answer",
      question: "What is the purpose of a refresh token in OAuth?",
      correctAnswer: "To obtain a new access token without re-authenticating",
      explanation: "Refresh tokens allow long-lived sessions."
    },
    {
      type: "multiple-choice",
      question: "Which OAuth 2.0 grant type is used for machine-to-machine communication?",
      options: ["Client Credentials", "Authorization Code", "Implicit", "Password"],
      correctAnswer: "Client Credentials",
      explanation: "Client Credentials is for server-to-server auth."
    },
    {
      type: "true-false",
      question: "OAuth 2.0 is an authentication protocol.",
      correctAnswer: false,
      explanation: "OAuth is for authorization, not authentication."
    },
    {
      type: "multiple-choice",
      question: "Which standard is used for signing and encrypting JWTs?",
      options: ["JWS/JWE", "JWK", "JTI", "JVC"],
      correctAnswer: "JWS/JWE",
      explanation: "JWS (signing) and JWE (encryption) are JWT standards."
    },
    {
      type: "short-answer",
      question: "What is CSRF?",
      correctAnswer: "Cross-Site Request Forgery",
      explanation: "CSRF is a common web security vulnerability."
    },
    {
      type: "multiple-choice",
      question: "Which OAuth 2.0 response type is used for the Implicit flow?",
      options: ["token", "code", "id_token", "access_token"],
      correctAnswer: "token",
      explanation: "The Implicit flow uses response_type=token."
    },
    {
      type: "true-false",
      question: "Access tokens should be stored in localStorage for web apps.",
      correctAnswer: false,
      explanation: "Storing tokens in localStorage exposes them to XSS."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP status code is used for unauthorized requests?",
      options: ["401", "403", "400", "404"],
      correctAnswer: "401",
      explanation: "401 Unauthorized is for missing/invalid credentials."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'scope' parameter in OAuth?",
      correctAnswer: "To specify the permissions requested by the client",
      explanation: "Scopes define what access is being requested."
    },
    {
      type: "multiple-choice",
      question: "Which OAuth 2.0 grant type is NOT recommended for new applications?",
      options: ["Implicit", "Authorization Code", "Client Credentials", "Device Code"],
      correctAnswer: "Implicit",
      explanation: "Implicit flow is deprecated for new apps."
    },
    {
      type: "true-false",
      question: "OAuth 2.0 supports token revocation.",
      correctAnswer: true,
      explanation: "OAuth 2.0 has a token revocation endpoint."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP header is used to prevent clickjacking?",
      options: ["X-Frame-Options", "X-XSS-Protection", "X-Content-Type-Options", "X-CSRF-Token"],
      correctAnswer: "X-Frame-Options",
      explanation: "X-Frame-Options prevents clickjacking."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'state' parameter in OAuth?",
      correctAnswer: "To prevent CSRF attacks and maintain state between requests",
      explanation: "The state parameter is used for CSRF protection."
    },
    {
      type: "multiple-choice",
      question: "Which security best practice is recommended for API keys?",
      options: ["Never expose them in client-side code", "Store them in localStorage", "Send them in URLs", "Share them publicly"],
      correctAnswer: "Never expose them in client-side code",
      explanation: "API keys should be kept secret."
    },
    {
      type: "true-false",
      question: "HTTPS is required for secure OAuth flows.",
      correctAnswer: true,
      explanation: "OAuth should always be used over HTTPS."
    },
    {
      type: "multiple-choice",
      question: "Which OAuth 2.0 endpoint is used to obtain an access token?",
      options: ["/token", "/authorize", "/login", "/userinfo"],
      correctAnswer: "/token",
      explanation: "The /token endpoint issues access tokens."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of OAuth scopes?",
      correctAnswer: "To limit the access granted to the client",
      explanation: "Scopes restrict what the client can do."
    }
  ],
  "FastAPI Essentials": [
    {
      type: "multiple-choice",
      question: "What is the main advantage of FastAPI over traditional Python web frameworks?",
      options: ["Automatic OpenAPI docs", "Faster performance", "Type hints for validation", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "FastAPI offers automatic docs, speed, and type-based validation."
    },
    {
      type: "multiple-choice",
      question: "Which decorator is used to define a GET endpoint in FastAPI?",
      options: ["@app.get", "@app.route", "@get", "@route.get"],
      correctAnswer: "@app.get",
      explanation: "@app.get defines a GET endpoint."
    },
    {
      type: "true-false",
      question: "FastAPI uses Pydantic for data validation.",
      correctAnswer: true,
      explanation: "Pydantic is used for request/response validation."
    },
    {
      type: "multiple-choice",
      question: "Which command runs a FastAPI app with uvicorn?",
      options: ["uvicorn main:app", "fastapi run", "python main.py", "uvicorn run app"],
      correctAnswer: "uvicorn main:app",
      explanation: "uvicorn main:app runs the FastAPI app."
    },
    {
      type: "short-answer",
      question: "What is a dependency in FastAPI?",
      correctAnswer: "A function that provides shared logic to endpoints",
      explanation: "Dependencies are reusable logic for endpoints."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP status code is returned by default for successful GET requests?",
      options: ["200", "201", "204", "404"],
      correctAnswer: "200",
      explanation: "200 OK is the default for successful GETs."
    },
    {
      type: "true-false",
      question: "FastAPI supports async endpoints.",
      correctAnswer: true,
      explanation: "You can define async def endpoints in FastAPI."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used to generate interactive API docs in FastAPI?",
      options: ["Swagger UI", "Postman", "Redoc", "Both Swagger UI and Redoc"],
      correctAnswer: "Both Swagger UI and Redoc",
      explanation: "FastAPI provides both Swagger UI and Redoc."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the Depends function?",
      correctAnswer: "To declare a dependency for an endpoint",
      explanation: "Depends is used to inject dependencies."
    },
    {
      type: "multiple-choice",
      question: "Which data format is used for request/response bodies by default?",
      options: ["JSON", "XML", "YAML", "Form Data"],
      correctAnswer: "JSON",
      explanation: "JSON is the default format."
    },
    {
      type: "true-false",
      question: "FastAPI can automatically generate OpenAPI schemas.",
      correctAnswer: true,
      explanation: "OpenAPI docs are generated automatically."
    },
    {
      type: "multiple-choice",
      question: "Which parameter type is used for query parameters in FastAPI?",
      options: ["Query", "Body", "Path", "Header"],
      correctAnswer: "Query",
      explanation: "Query parameters are declared with Query."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the status_code parameter in FastAPI endpoints?",
      correctAnswer: "To set the HTTP status code for the response",
      explanation: "status_code sets the response code."
    },
    {
      type: "multiple-choice",
      question: "Which command installs FastAPI and Uvicorn?",
      options: ["pip install fastapi uvicorn", "pip install fastapi", "pip install uvicorn", "pip install fastapi[all]"],
      correctAnswer: "pip install fastapi uvicorn",
      explanation: "Both packages are needed to run FastAPI apps."
    },
    {
      type: "true-false",
      question: "FastAPI supports dependency injection for security and authentication.",
      correctAnswer: true,
      explanation: "Dependencies can be used for security/auth."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to return a JSON response?",
      options: ["JSONResponse", "jsonify", "Response", "send_json"],
      correctAnswer: "JSONResponse",
      explanation: "JSONResponse returns JSON data."
    },
    {
      type: "short-answer",
      question: "What is a Pydantic model?",
      correctAnswer: "A class that defines data validation and serialization",
      explanation: "Pydantic models are used for data validation."
    },
    {
      type: "multiple-choice",
      question: "Which decorator is used for POST endpoints?",
      options: ["@app.post", "@post", "@app.route", "@route.post"],
      correctAnswer: "@app.post",
      explanation: "@app.post defines POST endpoints."
    },
    {
      type: "true-false",
      question: "FastAPI can serve static files with an additional package.",
      correctAnswer: true,
      explanation: "Static files require fastapi.staticfiles."
    },
    {
      type: "multiple-choice",
      question: "Which HTTP status code is used for resource creation in FastAPI?",
      options: ["200", "201", "204", "400"],
      correctAnswer: "201",
      explanation: "201 Created is used for new resources."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using type hints in FastAPI?",
      correctAnswer: "Automatic validation and documentation",
      explanation: "Type hints enable validation and docs generation."
    }
  ],
  "GraphQL Server with Apollo": [
    {
      type: "multiple-choice",
      question: "What is Apollo Server used for?",
      options: ["Building GraphQL APIs", "Building REST APIs", "Database management", "UI rendering"],
      correctAnswer: "Building GraphQL APIs",
      explanation: "Apollo Server is a popular GraphQL server implementation."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to start an Apollo Server?",
      options: ["listen()", "start()", "run()", "serve()"],
      correctAnswer: "listen()",
      explanation: "server.listen() starts the Apollo Server."
    },
    {
      type: "true-false",
      question: "Apollo Server supports schema-first development.",
      correctAnswer: true,
      explanation: "You define the schema before resolvers in schema-first."
    },
    {
      type: "multiple-choice",
      question: "Which file format is commonly used for GraphQL schema definitions?",
      options: [".graphql", ".json", ".gql", "Both .graphql and .gql"],
      correctAnswer: "Both .graphql and .gql",
      explanation: "Both .graphql and .gql are used for schema files."
    },
    {
      type: "short-answer",
      question: "What is a resolver in Apollo Server?",
      correctAnswer: "A function that returns data for a field in the schema",
      explanation: "Resolvers provide the logic for fetching data."
    },
    {
      type: "multiple-choice",
      question: "Which directive is used for authentication in Apollo Server?",
      options: ["@auth", "@requireAuth", "@authenticated", "Custom directive"],
      correctAnswer: "Custom directive",
      explanation: "Authentication is usually implemented with custom directives."
    },
    {
      type: "true-false",
      question: "Apollo Server can be integrated with Express.js.",
      correctAnswer: true,
      explanation: "Apollo Server can run as middleware in Express."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to merge multiple schemas in Apollo Server?",
      options: ["mergeSchemas", "combineSchemas", "joinSchemas", "unionSchemas"],
      correctAnswer: "mergeSchemas",
      explanation: "mergeSchemas is used for schema stitching."
    },
    {
      type: "short-answer",
      question: "What is the context argument in Apollo Server?",
      correctAnswer: "An object shared by all resolvers for a request",
      explanation: "Context is used for auth, db access, etc."
    },
    {
      type: "multiple-choice",
      question: "Which transport is used for GraphQL subscriptions in Apollo Server?",
      options: ["WebSocket", "HTTP", "gRPC", "SSE"],
      correctAnswer: "WebSocket",
      explanation: "Subscriptions use WebSocket for real-time data."
    },
    {
      type: "true-false",
      question: "Apollo Server supports file uploads out of the box.",
      correctAnswer: false,
      explanation: "File uploads require additional packages."
    },
    {
      type: "multiple-choice",
      question: "Which package is used for Apollo Server v3?",
      options: ["apollo-server", "apollo-server-express", "apollo-server-core", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All are used for different deployment scenarios."
    },
    {
      type: "short-answer",
      question: "What is schema stitching?",
      correctAnswer: "Combining multiple GraphQL schemas into one",
      explanation: "Schema stitching merges schemas."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to define custom scalars in Apollo Server?",
      options: ["GraphQLScalarType", "CustomScalar", "ScalarType", "ApolloScalar"],
      correctAnswer: "GraphQLScalarType",
      explanation: "GraphQLScalarType is used for custom scalars."
    },
    {
      type: "true-false",
      question: "Apollo Server can generate TypeScript types from schemas.",
      correctAnswer: true,
      explanation: "Tools like graphql-codegen generate TS types."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to add middleware to Apollo Server?",
      options: ["applyMiddleware", "use", "addMiddleware", "middleware"],
      correctAnswer: "applyMiddleware",
      explanation: "applyMiddleware adds Apollo to Express, etc."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the playground in Apollo Server?",
      correctAnswer: "To provide an interactive GraphQL IDE for testing queries",
      explanation: "Playground is a dev tool for testing."
    },
    {
      type: "multiple-choice",
      question: "Which error class is used for custom errors in Apollo Server?",
      options: ["ApolloError", "GraphQLError", "CustomError", "ServerError"],
      correctAnswer: "ApolloError",
      explanation: "ApolloError is for custom error handling."
    },
    {
      type: "true-false",
      question: "Apollo Server supports persisted queries.",
      correctAnswer: true,
      explanation: "Persisted queries are supported for performance."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to start a subscription server in Apollo?",
      options: ["SubscriptionServer.create", "startSubscriptionServer", "createSubscriptionServer", "ApolloSubscriptionServer"],
      correctAnswer: "SubscriptionServer.create",
      explanation: "SubscriptionServer.create starts the subscription server."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Apollo Federation?",
      correctAnswer: "To compose multiple GraphQL services into a single graph",
      explanation: "Federation enables distributed GraphQL architecture."
    }
  ],
  "Python for Beginners": [
    {
      type: "multiple-choice",
      question: "What is the output of print(type([])) in Python?",
      options: ["<class 'list'>", "<type 'list'>", "list", "<class 'array'>"],
      correctAnswer: "<class 'list'>",
      explanation: "type([]) returns <class 'list'>."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a function in Python?",
      options: ["def", "func", "function", "lambda"],
      correctAnswer: "def",
      explanation: "def is used to define functions."
    },
    {
      type: "true-false",
      question: "Python is a statically typed language.",
      correctAnswer: false,
      explanation: "Python is dynamically typed."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid Python data type?",
      options: ["list", "tuple", "set", "array"],
      correctAnswer: "array",
      explanation: "array is not a built-in Python type."
    },
    {
      type: "short-answer",
      question: "What is a list comprehension?",
      correctAnswer: "A concise way to create lists using a single line of code",
      explanation: "List comprehensions provide a compact way to create lists."
    },
    {
      type: "multiple-choice",
      question: "Which operator is used for floor division in Python?",
      options: ["/", "//", "%", "div"],
      correctAnswer: "//",
      explanation: "// is the floor division operator."
    },
    {
      type: "true-false",
      question: "Python supports multiple inheritance.",
      correctAnswer: true,
      explanation: "Classes can inherit from multiple parents."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to get user input in Python 3?",
      options: ["input()", "raw_input()", "get()", "read()"],
      correctAnswer: "input()",
      explanation: "input() is used for user input in Python 3."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'self' keyword in Python classes?",
      correctAnswer: "To refer to the instance of the class",
      explanation: "self refers to the current object."
    },
    {
      type: "multiple-choice",
      question: "Which statement is used to handle exceptions in Python?",
      options: ["try/except", "catch/except", "try/catch", "handle/except"],
      correctAnswer: "try/except",
      explanation: "try/except is used for exception handling."
    },
    {
      type: "true-false",
      question: "Python supports anonymous functions using lambda expressions.",
      correctAnswer: true,
      explanation: "lambda creates anonymous functions."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to add an item to a list?",
      options: ["append()", "add()", "insert()", "push()"],
      correctAnswer: "append()",
      explanation: "append() adds an item to the end of a list."
    },
    {
      type: "short-answer",
      question: "What is a dictionary in Python?",
      correctAnswer: "A collection of key-value pairs",
      explanation: "Dictionaries store data as key-value pairs."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a class in Python?",
      options: ["class", "def", "struct", "object"],
      correctAnswer: "class",
      explanation: "class is used to define classes."
    },
    {
      type: "true-false",
      question: "Python supports both for and while loops.",
      correctAnswer: true,
      explanation: "Both loop types are supported."
    },
    {
      type: "multiple-choice",
      question: "Which function returns the length of a list?",
      options: ["len()", "length()", "count()", "size()"],
      correctAnswer: "len()",
      explanation: "len() returns the length of a list."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'pass' statement?",
      correctAnswer: "To do nothing; a placeholder for future code",
      explanation: "pass is a no-op statement."
    },
    {
      type: "multiple-choice",
      question: "Which module is used for regular expressions in Python?",
      options: ["re", "regex", "regexp", "pattern"],
      correctAnswer: "re",
      explanation: "re is the regex module."
    },
    {
      type: "true-false",
      question: "Python supports list slicing.",
      correctAnswer: true,
      explanation: "You can slice lists with [start:stop:step]."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to convert a string to an integer?",
      options: ["int()", "str()", "float()", "parseInt()"],
      correctAnswer: "int()",
      explanation: "int() converts strings to integers."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'with' statement in Python?",
      correctAnswer: "To simplify exception handling and resource management",
      explanation: "with is used for context management."
    }
  ],
  "Data Science with Python": [
    // 20+ advanced questions for Data Science with Python
    {
      type: "multiple-choice",
      question: "Which Pandas function is used to perform a left join between two DataFrames?",
      options: ["merge", "join", "concat", "append"],
      correctAnswer: "merge",
      explanation: "The merge function is used for SQL-style joins in Pandas."
    },
    {
      type: "multiple-choice",
      question: "What is the primary purpose of the groupby operation in Pandas?",
      options: ["Sorting data", "Aggregating data", "Filtering data", "Merging data"],
      correctAnswer: "Aggregating data",
      explanation: "groupby is used to split, apply, and combine data for aggregation."
    },
    {
      type: "true-false",
      question: "The .loc accessor in Pandas is label-based, while .iloc is integer position-based.",
      correctAnswer: true,
      explanation: ".loc uses labels, .iloc uses integer positions."
    },
    {
      type: "short-answer",
      question: "What is the main difference between a Series and a DataFrame in Pandas?",
      correctAnswer: "A Series is 1-dimensional, a DataFrame is 2-dimensional",
      explanation: "Series is like a single column, DataFrame is a table."
    },
    {
      type: "multiple-choice",
      question: "Which library is commonly used for advanced statistical analysis in Python?",
      options: ["NumPy", "SciPy", "Matplotlib", "Seaborn"],
      correctAnswer: "SciPy",
      explanation: "SciPy provides advanced statistical and scientific functions."
    },
    {
      type: "multiple-choice",
      question: "Which function in NumPy is used to compute the eigenvalues of a matrix?",
      options: ["np.linalg.eig", "np.eigen", "np.matrix.eigen", "np.linalg.svd"],
      correctAnswer: "np.linalg.eig",
      explanation: "np.linalg.eig computes eigenvalues and eigenvectors."
    },
    {
      type: "true-false",
      question: "Seaborn is built on top of Matplotlib and provides a higher-level interface for statistical graphics.",
      correctAnswer: true,
      explanation: "Seaborn extends Matplotlib for easier statistical plotting."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to handle missing data in Pandas?",
      options: ["dropna", "fillna", "interpolate", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All these methods are used to handle missing data."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the value_counts() method in Pandas?",
      correctAnswer: "To count unique values in a Series",
      explanation: "value_counts() returns the frequency of unique values."
    },
    {
      type: "multiple-choice",
      question: "Which function in Matplotlib is used to create a scatter plot?",
      options: ["plot", "scatter", "bar", "hist"],
      correctAnswer: "scatter",
      explanation: "scatter() creates a scatter plot."
    },
    {
      type: "true-false",
      question: "Principal Component Analysis (PCA) is used for dimensionality reduction.",
      correctAnswer: true,
      explanation: "PCA reduces the number of features while preserving variance."
    },
    {
      type: "multiple-choice",
      question: "Which Pandas method is used to read a CSV file?",
      options: ["read_csv", "to_csv", "from_csv", "load_csv"],
      correctAnswer: "read_csv",
      explanation: "read_csv() loads data from a CSV file."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of a heatmap in data visualization?",
      correctAnswer: "To visualize the magnitude of values in a matrix",
      explanation: "Heatmaps show data density or correlation matrices."
    },
    {
      type: "multiple-choice",
      question: "Which library is best for interactive data visualization in Python?",
      options: ["Matplotlib", "Seaborn", "Plotly", "Pandas"],
      correctAnswer: "Plotly",
      explanation: "Plotly is widely used for interactive visualizations."
    },
    {
      type: "true-false",
      question: "A boxplot can be used to detect outliers in a dataset.",
      correctAnswer: true,
      explanation: "Boxplots visualize the spread and outliers in data."
    },
    {
      type: "multiple-choice",
      question: "Which Pandas function is used to pivot a DataFrame?",
      options: ["pivot", "melt", "stack", "unstack"],
      correctAnswer: "pivot",
      explanation: "pivot() reshapes data based on column values."
    },
    {
      type: "short-answer",
      question: "What is the difference between supervised and unsupervised learning?",
      correctAnswer: "Supervised uses labeled data, unsupervised does not",
      explanation: "Supervised learning has labels, unsupervised finds patterns."
    },
    {
      type: "multiple-choice",
      question: "Which metric is best for evaluating a regression model?",
      options: ["Accuracy", "Mean Squared Error", "Precision", "Recall"],
      correctAnswer: "Mean Squared Error",
      explanation: "MSE is commonly used for regression evaluation."
    },
    {
      type: "true-false",
      question: "Feature scaling is important before applying k-means clustering.",
      correctAnswer: true,
      explanation: "K-means is sensitive to feature scales."
    },
    {
      type: "multiple-choice",
      question: "Which library provides the train_test_split function?",
      options: ["scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      correctAnswer: "scikit-learn",
      explanation: "train_test_split is from scikit-learn."
    },
    {
      type: "short-answer",
      question: "What is the purpose of cross-validation in machine learning?",
      correctAnswer: "To assess model performance on unseen data",
      explanation: "Cross-validation helps prevent overfitting."
    }
  ],
  "Machine Learning Basics": [
    // 20+ advanced questions for Machine Learning Basics
    {
      type: "multiple-choice",
      question: "Which algorithm is best suited for binary classification?",
      options: ["Linear Regression", "Logistic Regression", "K-Means", "PCA"],
      correctAnswer: "Logistic Regression",
      explanation: "Logistic regression is used for binary classification."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of regularization in machine learning?",
      options: ["Increase model complexity", "Prevent overfitting", "Improve training speed", "Reduce data size"],
      correctAnswer: "Prevent overfitting",
      explanation: "Regularization penalizes large weights to prevent overfitting."
    },
    {
      type: "true-false",
      question: "The ROC curve is used to evaluate classification models.",
      correctAnswer: true,
      explanation: "ROC curves show the trade-off between TPR and FPR."
    },
    {
      type: "short-answer",
      question: "What is the difference between bagging and boosting?",
      correctAnswer: "Bagging trains models independently, boosting trains sequentially",
      explanation: "Bagging reduces variance, boosting reduces bias."
    },
    {
      type: "multiple-choice",
      question: "Which metric is NOT suitable for imbalanced classification problems?",
      options: ["Accuracy", "Precision", "Recall", "F1 Score"],
      correctAnswer: "Accuracy",
      explanation: "Accuracy can be misleading for imbalanced data."
    },
    {
      type: "multiple-choice",
      question: "Which algorithm is used for unsupervised clustering?",
      options: ["K-Means", "Logistic Regression", "Decision Tree", "Random Forest"],
      correctAnswer: "K-Means",
      explanation: "K-Means is a popular clustering algorithm."
    },
    {
      type: "true-false",
      question: "Gradient descent is an optimization algorithm used to minimize loss functions.",
      correctAnswer: true,
      explanation: "Gradient descent finds the minimum of a function."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a hyperparameter in a decision tree?",
      options: ["max_depth", "learning_rate", "batch_size", "momentum"],
      correctAnswer: "max_depth",
      explanation: "max_depth controls the depth of a decision tree."
    },
    {
      type: "short-answer",
      question: "What is the bias-variance tradeoff?",
      correctAnswer: "The balance between underfitting and overfitting",
      explanation: "High bias = underfit, high variance = overfit."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to handle categorical variables in machine learning?",
      options: ["One-hot encoding", "Feature scaling", "PCA", "Bagging"],
      correctAnswer: "One-hot encoding",
      explanation: "One-hot encoding converts categories to binary features."
    },
    {
      type: "true-false",
      question: "Random forests are an ensemble of decision trees.",
      correctAnswer: true,
      explanation: "Random forests aggregate multiple decision trees."
    },
    {
      type: "multiple-choice",
      question: "Which loss function is commonly used for regression?",
      options: ["Cross-entropy", "Mean Squared Error", "Hinge loss", "Log loss"],
      correctAnswer: "Mean Squared Error",
      explanation: "MSE is standard for regression."
    },
    {
      type: "short-answer",
      question: "What is feature engineering?",
      correctAnswer: "The process of creating new features from raw data",
      explanation: "Feature engineering improves model performance."
    },
    {
      type: "multiple-choice",
      question: "Which technique is used to reduce the number of features in a dataset?",
      options: ["PCA", "Bagging", "Boosting", "Grid search"],
      correctAnswer: "PCA",
      explanation: "Principal Component Analysis reduces dimensionality."
    },
    {
      type: "true-false",
      question: "Overfitting occurs when a model performs well on training data but poorly on test data.",
      correctAnswer: true,
      explanation: "Overfitting means poor generalization."
    },
    {
      type: "multiple-choice",
      question: "Which algorithm is best for time series forecasting?",
      options: ["ARIMA", "K-Means", "Logistic Regression", "Naive Bayes"],
      correctAnswer: "ARIMA",
      explanation: "ARIMA is widely used for time series."
    },
    {
      type: "short-answer",
      question: "What is cross-entropy loss used for?",
      correctAnswer: "Evaluating classification models",
      explanation: "Cross-entropy measures the difference between predicted and true distributions."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to prevent overfitting in neural networks?",
      options: ["Dropout", "Bagging", "Boosting", "Stacking"],
      correctAnswer: "Dropout",
      explanation: "Dropout randomly disables neurons during training."
    },
    {
      type: "true-false",
      question: "A confusion matrix is used to evaluate regression models.",
      correctAnswer: false,
      explanation: "Confusion matrices are for classification."
    },
    {
      type: "multiple-choice",
      question: "Which metric is best for evaluating clustering performance?",
      options: ["Silhouette score", "Accuracy", "Precision", "Recall"],
      correctAnswer: "Silhouette score",
      explanation: "Silhouette score measures cluster separation."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of ensemble methods?",
      correctAnswer: "They improve model accuracy and robustness",
      explanation: "Ensembles combine multiple models for better results."
    }
  ],
  "Deep Learning with TensorFlow": [
    // 20+ advanced questions for Deep Learning with TensorFlow
    {
      type: "multiple-choice",
      question: "Which API is recommended for building models in modern TensorFlow?",
      options: ["tf.keras", "tf.layers", "tf.contrib", "tf.slim"],
      correctAnswer: "tf.keras",
      explanation: "tf.keras is the high-level API for building models."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of the activation function in a neural network?",
      options: ["Introduce non-linearity", "Reduce overfitting", "Increase learning rate", "Normalize inputs"],
      correctAnswer: "Introduce non-linearity",
      explanation: "Activation functions allow networks to learn complex patterns."
    },
    {
      type: "true-false",
      question: "The Adam optimizer combines the benefits of AdaGrad and RMSProp.",
      correctAnswer: true,
      explanation: "Adam uses adaptive learning rates and momentum."
    },
    {
      type: "short-answer",
      question: "What is the purpose of dropout in deep learning?",
      correctAnswer: "To prevent overfitting by randomly dropping units during training",
      explanation: "Dropout regularizes neural networks."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to compute the loss for a classification problem in TensorFlow?",
      options: ["tf.keras.losses.CategoricalCrossentropy", "tf.keras.losses.MeanSquaredError", "tf.keras.losses.Hinge", "tf.keras.losses.MeanAbsoluteError"],
      correctAnswer: "tf.keras.losses.CategoricalCrossentropy",
      explanation: "CategoricalCrossentropy is standard for classification."
    },
    {
      type: "multiple-choice",
      question: "Which layer is commonly used for image data in CNNs?",
      options: ["Conv2D", "Dense", "LSTM", "Embedding"],
      correctAnswer: "Conv2D",
      explanation: "Conv2D is used for 2D image convolutions."
    },
    {
      type: "true-false",
      question: "Batch normalization helps stabilize and accelerate deep network training.",
      correctAnswer: true,
      explanation: "Batch normalization normalizes activations for each batch."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to create a tensor of all zeros in TensorFlow?",
      options: ["tf.zeros", "tf.ones", "tf.fill", "tf.constant"],
      correctAnswer: "tf.zeros",
      explanation: "tf.zeros creates a tensor filled with zeros."
    },
    {
      type: "short-answer",
      question: "What is the vanishing gradient problem?",
      correctAnswer: "Gradients become very small, slowing or stopping learning",
      explanation: "Vanishing gradients hinder deep network training."
    },
    {
      type: "multiple-choice",
      question: "Which RNN variant is designed to address the vanishing gradient problem?",
      options: ["LSTM", "Dense", "Conv2D", "Dropout"],
      correctAnswer: "LSTM",
      explanation: "LSTM networks are designed to remember long-term dependencies."
    },
    {
      type: "true-false",
      question: "TensorFlow supports both eager and graph execution modes.",
      correctAnswer: true,
      explanation: "TensorFlow 2.x defaults to eager execution but supports graphs."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to save a trained model in TensorFlow?",
      options: ["model.save", "model.export", "tf.save", "tf.keras.save_model"],
      correctAnswer: "model.save",
      explanation: "model.save() saves the entire model."
    },
    {
      type: "short-answer",
      question: "What is the main difference between a dense and a convolutional layer?",
      correctAnswer: "Dense layers connect all inputs to all outputs, convolutional layers use local connections",
      explanation: "Dense = fully connected, Conv = local receptive fields."
    },
    {
      type: "multiple-choice",
      question: "Which callback is used to stop training when validation loss stops improving?",
      options: ["EarlyStopping", "ModelCheckpoint", "ReduceLROnPlateau", "TensorBoard"],
      correctAnswer: "EarlyStopping",
      explanation: "EarlyStopping halts training to prevent overfitting."
    },
    {
      type: "true-false",
      question: "Transfer learning allows you to use pre-trained models for new tasks.",
      correctAnswer: true,
      explanation: "Transfer learning leverages existing models."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to one-hot encode labels in TensorFlow?",
      options: ["tf.one_hot", "tf.encode", "tf.to_categorical", "tf.label_encode"],
      correctAnswer: "tf.one_hot",
      explanation: "tf.one_hot creates one-hot encoded tensors."
    },
    {
      type: "short-answer",
      question: "What is the receptive field in a convolutional neural network?",
      correctAnswer: "The region of input that a neuron is influenced by",
      explanation: "Receptive field defines the spatial extent of input."
    },
    {
      type: "multiple-choice",
      question: "Which optimizer is NOT commonly used in deep learning?",
      options: ["SGD", "Adam", "RMSProp", "Newton's Method"],
      correctAnswer: "Newton's Method",
      explanation: "Newton's Method is not used for deep learning."
    },
    {
      type: "true-false",
      question: "A higher batch size always leads to better model generalization.",
      correctAnswer: false,
      explanation: "Batch size affects training dynamics but bigger isn't always better."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to visualize model training in TensorFlow?",
      options: ["TensorBoard", "Matplotlib", "Seaborn", "Pandas"],
      correctAnswer: "TensorBoard",
      explanation: "TensorBoard is the standard visualization tool."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using GPUs for deep learning?",
      correctAnswer: "GPUs accelerate matrix computations for faster training",
      explanation: "GPUs are optimized for parallel computation."
    }
  ],
  "Natural Language Processing": [
    // 20+ advanced questions for Natural Language Processing
    {
      type: "multiple-choice",
      question: "Which technique is commonly used for word embedding in NLP?",
      options: ["Word2Vec", "Bag of Words", "TF-IDF", "Count Vectorizer"],
      correctAnswer: "Word2Vec",
      explanation: "Word2Vec learns dense vector representations of words."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of stemming in NLP?",
      options: ["Remove stopwords", "Reduce words to their root form", "Tokenize text", "Count word frequency"],
      correctAnswer: "Reduce words to their root form",
      explanation: "Stemming reduces words to their base or root form."
    },
    {
      type: "true-false",
      question: "Lemmatization always produces valid dictionary words, while stemming may not.",
      correctAnswer: true,
      explanation: "Lemmatization returns valid words; stemming may not."
    },
    {
      type: "short-answer",
      question: "What is the difference between tokenization and segmentation?",
      correctAnswer: "Tokenization splits text into words/tokens, segmentation splits into sentences/phrases",
      explanation: "Tokenization is finer-grained than segmentation."
    },
    {
      type: "multiple-choice",
      question: "Which model is commonly used for sequence labeling tasks like NER?",
      options: ["CRF", "Naive Bayes", "SVM", "KNN"],
      correctAnswer: "CRF",
      explanation: "Conditional Random Fields are used for sequence labeling."
    },
    {
      type: "multiple-choice",
      question: "Which metric is best for evaluating a text classification model?",
      options: ["Accuracy", "F1 Score", "Mean Squared Error", "Silhouette Score"],
      correctAnswer: "F1 Score",
      explanation: "F1 Score balances precision and recall."
    },
    {
      type: "true-false",
      question: "TF-IDF gives higher weight to words that appear frequently in a document but rarely in the corpus.",
      correctAnswer: true,
      explanation: "TF-IDF highlights important, rare words."
    },
    {
      type: "multiple-choice",
      question: "Which neural network architecture is best for modeling sequential text data?",
      options: ["RNN", "CNN", "MLP", "SVM"],
      correctAnswer: "RNN",
      explanation: "RNNs are designed for sequential data."
    },
    {
      type: "short-answer",
      question: "What is the purpose of attention mechanisms in NLP models?",
      correctAnswer: "To focus on relevant parts of the input sequence",
      explanation: "Attention allows models to weigh input tokens differently."
    },
    {
      type: "multiple-choice",
      question: "Which library is widely used for NLP in Python?",
      options: ["NLTK", "OpenCV", "Matplotlib", "TensorFlow"],
      correctAnswer: "NLTK",
      explanation: "NLTK is a popular NLP library."
    },
    {
      type: "true-false",
      question: "Word embeddings capture semantic relationships between words.",
      correctAnswer: true,
      explanation: "Embeddings encode semantic similarity."
    },
    {
      type: "multiple-choice",
      question: "Which transformer-based model is widely used for NLP tasks?",
      options: ["BERT", "VGG", "ResNet", "AlexNet"],
      correctAnswer: "BERT",
      explanation: "BERT is a popular transformer model for NLP."
    },
    {
      type: "short-answer",
      question: "What is named entity recognition (NER)?",
      correctAnswer: "Identifying and classifying entities in text",
      explanation: "NER extracts names, places, organizations, etc."
    },
    {
      type: "multiple-choice",
      question: "Which evaluation metric is NOT suitable for language modeling?",
      options: ["Perplexity", "BLEU", "Accuracy", "F1 Score"],
      correctAnswer: "F1 Score",
      explanation: "F1 is not standard for language modeling."
    },
    {
      type: "true-false",
      question: "Stopword removal is essential for all NLP tasks.",
      correctAnswer: false,
      explanation: "Some tasks require stopwords (e.g., sentiment analysis)."
    },
    {
      type: "multiple-choice",
      question: "Which method is used for topic modeling in NLP?",
      options: ["LDA", "PCA", "K-Means", "SVM"],
      correctAnswer: "LDA",
      explanation: "Latent Dirichlet Allocation is used for topic modeling."
    },
    {
      type: "short-answer",
      question: "What is the main challenge of coreference resolution?",
      correctAnswer: "Identifying when different words refer to the same entity",
      explanation: "Coreference links pronouns and entities."
    },
    {
      type: "multiple-choice",
      question: "Which task involves generating a summary of a document?",
      options: ["Summarization", "Translation", "Classification", "Segmentation"],
      correctAnswer: "Summarization",
      explanation: "Summarization creates concise versions of text."
    },
    {
      type: "true-false",
      question: "BLEU score is used to evaluate machine translation quality.",
      correctAnswer: true,
      explanation: "BLEU measures translation accuracy."
    },
    {
      type: "multiple-choice",
      question: "Which model is best for sequence-to-sequence tasks?",
      options: ["Encoder-Decoder", "MLP", "SVM", "Random Forest"],
      correctAnswer: "Encoder-Decoder",
      explanation: "Encoder-Decoder models are used for seq2seq tasks."
    },
    {
      type: "short-answer",
      question: "What is the purpose of word sense disambiguation?",
      correctAnswer: "To determine the correct meaning of a word in context",
      explanation: "WSD resolves ambiguity in word meanings."
    }
  ],
  "Data Visualization with D3.js": [
    // 20+ advanced questions for Data Visualization with D3.js
    {
      type: "multiple-choice",
      question: "Which D3 method is used to bind data to DOM elements?",
      options: ["data()", "bind()", "attach()", "select()"],
      correctAnswer: "data()",
      explanation: "data() binds data to elements."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of the enter() selection in D3?",
      options: ["To append new elements for incoming data", "To remove elements", "To update existing elements", "To sort data"],
      correctAnswer: "To append new elements for incoming data",
      explanation: "enter() handles new data points."
    },
    {
      type: "true-false",
      question: "D3 can animate transitions between data states.",
      correctAnswer: true,
      explanation: "D3 supports smooth transitions."
    },
    {
      type: "short-answer",
      question: "What is a scale in D3?",
      correctAnswer: "A function that maps data values to visual values",
      explanation: "Scales convert data to pixel values."
    },
    {
      type: "multiple-choice",
      question: "Which D3 module is used for creating axes?",
      options: ["d3-axis", "d3-shape", "d3-scale", "d3-array"],
      correctAnswer: "d3-axis",
      explanation: "d3-axis provides axis generators."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to create a linear scale in D3?",
      options: ["d3.scaleLinear()", "d3.linearScale()", "d3.createScale()", "d3.scale()"],
      correctAnswer: "d3.scaleLinear()",
      explanation: "scaleLinear() creates a linear scale."
    },
    {
      type: "true-false",
      question: "SVG is the only rendering option supported by D3.",
      correctAnswer: false,
      explanation: "D3 can render to SVG, Canvas, or HTML."
    },
    {
      type: "multiple-choice",
      question: "Which D3 method is used to create a pie chart layout?",
      options: ["d3.pie()", "d3.arc()", "d3.layoutPie()", "d3.pieChart()"],
      correctAnswer: "d3.pie()",
      explanation: "d3.pie() computes pie chart angles."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the update selection in D3's data join?",
      correctAnswer: "To update existing elements with new data",
      explanation: "Update selection modifies elements for changed data."
    },
    {
      type: "multiple-choice",
      question: "Which D3 function is used to interpolate between values for animation?",
      options: ["d3.interpolate()", "d3.transition()", "d3.animate()", "d3.lerp()"],
      correctAnswer: "d3.interpolate()",
      explanation: "d3.interpolate() creates interpolators."
    },
    {
      type: "true-false",
      question: "D3 supports event handling for interactive visualizations.",
      correctAnswer: true,
      explanation: "D3 can handle mouse and touch events."
    },
    {
      type: "multiple-choice",
      question: "Which D3 method is used to remove elements from the DOM?",
      options: ["remove()", "delete()", "exit()", "detach()"],
      correctAnswer: "remove()",
      explanation: "remove() deletes elements from the DOM."
    },
    {
      type: "short-answer",
      question: "What is a domain in the context of D3 scales?",
      correctAnswer: "The input data range for a scale",
      explanation: "Domain defines the data values mapped by the scale."
    },
    {
      type: "multiple-choice",
      question: "Which D3 function is used to create a color scale?",
      options: ["d3.scaleOrdinal()", "d3.color()", "d3.scaleColor()", "d3.colorScale()"],
      correctAnswer: "d3.scaleOrdinal()",
      explanation: "scaleOrdinal() is used for categorical color scales."
    },
    {
      type: "true-false",
      question: "D3 can be used to create force-directed graph layouts.",
      correctAnswer: true,
      explanation: "D3-force module supports force-directed layouts."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to append an SVG element in D3?",
      options: ["append()", "add()", "insert()", "create()"],
      correctAnswer: "append()",
      explanation: "append() adds new elements."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using D3 for data visualization?",
      correctAnswer: "Fine-grained control over visual elements and interactivity",
      explanation: "D3 provides low-level control for custom visualizations."
    },
    {
      type: "multiple-choice",
      question: "Which D3 function is used to create a line generator?",
      options: ["d3.line()", "d3.path()", "d3.createLine()", "d3.lineGenerator()"],
      correctAnswer: "d3.line()",
      explanation: "d3.line() generates SVG path data for lines."
    },
    {
      type: "true-false",
      question: "D3 can be integrated with React for building visualizations.",
      correctAnswer: true,
      explanation: "D3 and React can be combined for interactive UIs."
    },
    {
      type: "multiple-choice",
      question: "Which D3 method is used to filter selected elements?",
      options: ["filter()", "selectAll()", "find()", "query()"],
      correctAnswer: "filter()",
      explanation: "filter() narrows down selected elements."
    },
    {
      type: "short-answer",
      question: "What is the difference between SVG and Canvas rendering in D3?",
      correctAnswer: "SVG is vector-based and DOM-driven, Canvas is pixel-based and immediate mode",
      explanation: "SVG allows DOM manipulation, Canvas is for fast, bitmap rendering."
    }
  ],
  "Statistics for Data Science": [
    // 20+ advanced questions for Statistics for Data Science
    {
      type: "multiple-choice",
      question: "Which statistical test is used to compare the means of two independent groups?",
      options: ["t-test", "ANOVA", "Chi-square", "Mann-Whitney U"],
      correctAnswer: "t-test",
      explanation: "t-test compares means of two groups."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a p-value in hypothesis testing?",
      options: ["Measure effect size", "Indicate probability of observing data under null hypothesis", "Estimate population mean", "Calculate variance"],
      correctAnswer: "Indicate probability of observing data under null hypothesis",
      explanation: "p-value quantifies evidence against the null hypothesis."
    },
    {
      type: "true-false",
      question: "A confidence interval provides a range of plausible values for a population parameter.",
      correctAnswer: true,
      explanation: "Confidence intervals estimate population parameters."
    },
    {
      type: "short-answer",
      question: "What is the difference between Type I and Type II errors?",
      correctAnswer: "Type I is false positive, Type II is false negative",
      explanation: "Type I = reject true null, Type II = fail to reject false null."
    },
    {
      type: "multiple-choice",
      question: "Which measure of central tendency is most affected by outliers?",
      options: ["Mean", "Median", "Mode", "Range"],
      correctAnswer: "Mean",
      explanation: "Mean is sensitive to extreme values."
    },
    {
      type: "multiple-choice",
      question: "Which test is used to assess the association between two categorical variables?",
      options: ["Chi-square", "t-test", "ANOVA", "Pearson correlation"],
      correctAnswer: "Chi-square",
      explanation: "Chi-square tests association between categorical variables."
    },
    {
      type: "true-false",
      question: "The standard deviation is the square root of the variance.",
      correctAnswer: true,
      explanation: "Standard deviation is the square root of variance."
    },
    {
      type: "multiple-choice",
      question: "Which distribution is used to model the number of successes in a fixed number of trials?",
      options: ["Binomial", "Normal", "Poisson", "Exponential"],
      correctAnswer: "Binomial",
      explanation: "Binomial models discrete successes in trials."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the Central Limit Theorem?",
      correctAnswer: "To state that the sampling distribution of the mean approaches normality as sample size increases",
      explanation: "CLT explains why means are normally distributed."
    },
    {
      type: "multiple-choice",
      question: "Which statistic measures the strength and direction of a linear relationship?",
      options: ["Correlation coefficient", "Variance", "Skewness", "Kurtosis"],
      correctAnswer: "Correlation coefficient",
      explanation: "Correlation quantifies linear relationships."
    },
    {
      type: "true-false",
      question: "A low p-value indicates strong evidence against the null hypothesis.",
      correctAnswer: true,
      explanation: "Low p-values suggest rejecting the null."
    },
    {
      type: "multiple-choice",
      question: "Which test is used to compare means across more than two groups?",
      options: ["ANOVA", "t-test", "Chi-square", "Wilcoxon"],
      correctAnswer: "ANOVA",
      explanation: "ANOVA compares means of multiple groups."
    },
    {
      type: "short-answer",
      question: "What is heteroscedasticity?",
      correctAnswer: "Non-constant variance of errors in regression",
      explanation: "Heteroscedasticity violates regression assumptions."
    },
    {
      type: "multiple-choice",
      question: "Which distribution is symmetric and bell-shaped?",
      options: ["Normal", "Poisson", "Exponential", "Binomial"],
      correctAnswer: "Normal",
      explanation: "Normal distribution is bell-shaped."
    },
    {
      type: "true-false",
      question: "The median is always equal to the mean in a normal distribution.",
      correctAnswer: true,
      explanation: "Mean = median = mode in normal distribution."
    },
    {
      type: "multiple-choice",
      question: "Which statistic measures the peakedness of a distribution?",
      options: ["Kurtosis", "Skewness", "Variance", "Mean"],
      correctAnswer: "Kurtosis",
      explanation: "Kurtosis measures tails and peak."
    },
    {
      type: "short-answer",
      question: "What is the purpose of a QQ plot?",
      correctAnswer: "To assess if data follows a theoretical distribution",
      explanation: "QQ plots compare data to a distribution."
    },
    {
      type: "multiple-choice",
      question: "Which test is used for non-parametric comparison of two groups?",
      options: ["Mann-Whitney U", "t-test", "ANOVA", "Chi-square"],
      correctAnswer: "Mann-Whitney U",
      explanation: "Mann-Whitney U is a non-parametric test."
    },
    {
      type: "true-false",
      question: "Correlation implies causation.",
      correctAnswer: false,
      explanation: "Correlation does not imply causation."
    },
    {
      type: "multiple-choice",
      question: "Which statistic is used to measure the spread of a dataset?",
      options: ["Variance", "Mean", "Median", "Mode"],
      correctAnswer: "Variance",
      explanation: "Variance measures data spread."
    },
    {
      type: "short-answer",
      question: "What is the law of large numbers?",
      correctAnswer: "As sample size increases, sample mean approaches population mean",
      explanation: "Law of large numbers ensures convergence to the mean."
    }
  ],
  "Big Data with Hadoop": [
    // 20+ advanced questions for Big Data with Hadoop
    {
      type: "multiple-choice",
      question: "Which component of Hadoop is responsible for distributed storage?",
      options: ["HDFS", "MapReduce", "YARN", "Hive"],
      correctAnswer: "HDFS",
      explanation: "HDFS (Hadoop Distributed File System) handles distributed storage."
    },
    {
      type: "multiple-choice",
      question: "What is the main function of the NameNode in HDFS?",
      options: ["Store file data", "Manage metadata and file system namespace", "Run MapReduce jobs", "Schedule tasks"],
      correctAnswer: "Manage metadata and file system namespace",
      explanation: "The NameNode manages metadata and directory structure."
    },
    {
      type: "true-false",
      question: "Data in HDFS is replicated across multiple nodes for fault tolerance.",
      correctAnswer: true,
      explanation: "Replication ensures data availability in case of node failure."
    },
    {
      type: "short-answer",
      question: "What is the default replication factor in HDFS?",
      correctAnswer: "3",
      explanation: "By default, HDFS replicates each block three times."
    },
    {
      type: "multiple-choice",
      question: "Which component is responsible for resource management in Hadoop 2.x?",
      options: ["YARN", "MapReduce", "HDFS", "Pig"],
      correctAnswer: "YARN",
      explanation: "YARN (Yet Another Resource Negotiator) manages resources."
    },
    {
      type: "multiple-choice",
      question: "Which language is used to write MapReduce programs?",
      options: ["Java", "Python", "Scala", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "MapReduce can be written in several languages, most commonly Java."
    },
    {
      type: "true-false",
      question: "MapReduce jobs consist of a map phase and a reduce phase.",
      correctAnswer: true,
      explanation: "MapReduce splits processing into map and reduce steps."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for querying large datasets stored in Hadoop using SQL-like syntax?",
      options: ["Hive", "Pig", "HBase", "Sqoop"],
      correctAnswer: "Hive",
      explanation: "Hive provides a SQL-like interface for Hadoop."
    },
    {
      type: "short-answer",
      question: "What is a block in HDFS?",
      correctAnswer: "A fixed-size chunk of data stored in the file system",
      explanation: "Blocks are the basic unit of storage in HDFS."
    },
    {
      type: "multiple-choice",
      question: "Which Hadoop ecosystem component is used for data ingestion from RDBMS?",
      options: ["Sqoop", "Flume", "Pig", "Oozie"],
      correctAnswer: "Sqoop",
      explanation: "Sqoop is used for importing/exporting data between Hadoop and RDBMS."
    },
    {
      type: "true-false",
      question: "HBase is a NoSQL database that runs on top of HDFS.",
      correctAnswer: true,
      explanation: "HBase provides real-time read/write access to big data."
    },
    {
      type: "multiple-choice",
      question: "Which file format is optimized for Hadoop processing?",
      options: ["Parquet", "CSV", "JSON", "XML"],
      correctAnswer: "Parquet",
      explanation: "Parquet is a columnar storage format optimized for Hadoop."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the Secondary NameNode in Hadoop?",
      correctAnswer: "To periodically merge the namespace image with the edit log",
      explanation: "Secondary NameNode helps keep the NameNode's metadata up to date."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for workflow scheduling in Hadoop?",
      options: ["Oozie", "Pig", "Hive", "Sqoop"],
      correctAnswer: "Oozie",
      explanation: "Oozie is a workflow scheduler for Hadoop jobs."
    },
    {
      type: "true-false",
      question: "Pig Latin is a procedural language for data analysis on Hadoop.",
      correctAnswer: true,
      explanation: "Pig Latin scripts are used with Apache Pig."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to copy files from local to HDFS?",
      options: ["hdfs dfs -put", "hdfs dfs -get", "hdfs dfs -ls", "hdfs dfs -rm"],
      correctAnswer: "hdfs dfs -put",
      explanation: "-put uploads files to HDFS."
    },
    {
      type: "short-answer",
      question: "What is a reducer in MapReduce?",
      correctAnswer: "A function that aggregates and processes mapped data",
      explanation: "Reducers combine and process the output of mappers."
    },
    {
      type: "multiple-choice",
      question: "Which Hadoop component is used for distributed, scalable data storage?",
      options: ["HDFS", "HBase", "Hive", "Pig"],
      correctAnswer: "HDFS",
      explanation: "HDFS is the primary storage system in Hadoop."
    },
    {
      type: "true-false",
      question: "Hadoop can run on commodity hardware.",
      correctAnswer: true,
      explanation: "Hadoop is designed for inexpensive, commodity hardware."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for real-time data ingestion into Hadoop?",
      options: ["Flume", "Sqoop", "Hive", "Pig"],
      correctAnswer: "Flume",
      explanation: "Flume is used for streaming data ingestion."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using Hadoop for big data processing?",
      correctAnswer: "Scalability and fault tolerance for large-scale data",
      explanation: "Hadoop is designed for scalable, reliable big data processing."
    }
  ],
  "Computer Vision with OpenCV": [
    // 20+ advanced questions for Computer Vision with OpenCV
    {
      type: "multiple-choice",
      question: "Which function is used to read an image in OpenCV?",
      options: ["cv2.imread", "cv2.read", "cv2.load", "cv2.open"],
      correctAnswer: "cv2.imread",
      explanation: "cv2.imread reads images from disk."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of the cv2.cvtColor function?",
      options: ["Resize image", "Convert color spaces", "Detect edges", "Draw shapes"],
      correctAnswer: "Convert color spaces",
      explanation: "cv2.cvtColor converts between color spaces."
    },
    {
      type: "true-false",
      question: "OpenCV supports both grayscale and color images.",
      correctAnswer: true,
      explanation: "OpenCV can process images in various color formats."
    },
    {
      type: "short-answer",
      question: "What is a kernel in image processing?",
      correctAnswer: "A small matrix used for filtering operations",
      explanation: "Kernels are used for convolution and filtering."
    },
    {
      type: "multiple-choice",
      question: "Which function is used for edge detection in OpenCV?",
      options: ["cv2.Canny", "cv2.Sobel", "cv2.Laplacian", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All these functions can be used for edge detection."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to find contours in an image?",
      options: ["cv2.findContours", "cv2.detectContours", "cv2.getContours", "cv2.contour"],
      correctAnswer: "cv2.findContours",
      explanation: "cv2.findContours detects contours in binary images."
    },
    {
      type: "true-false",
      question: "OpenCV can perform real-time video processing.",
      correctAnswer: true,
      explanation: "OpenCV is optimized for real-time applications."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to display an image in a window?",
      options: ["cv2.imshow", "cv2.display", "cv2.show", "cv2.view"],
      correctAnswer: "cv2.imshow",
      explanation: "cv2.imshow displays images in a window."
    },
    {
      type: "short-answer",
      question: "What is the purpose of thresholding in image processing?",
      correctAnswer: "To segment images by converting grayscale to binary",
      explanation: "Thresholding separates objects from the background."
    },
    {
      type: "multiple-choice",
      question: "Which color space is commonly used for face detection?",
      options: ["HSV", "RGB", "BGR", "Grayscale"],
      correctAnswer: "HSV",
      explanation: "HSV is often used for color-based segmentation."
    },
    {
      type: "true-false",
      question: "OpenCV supports drawing shapes like circles and rectangles.",
      correctAnswer: true,
      explanation: "OpenCV provides functions for drawing shapes."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to resize an image in OpenCV?",
      options: ["cv2.resize", "cv2.scale", "cv2.transform", "cv2.stretch"],
      correctAnswer: "cv2.resize",
      explanation: "cv2.resize changes image dimensions."
    },
    {
      type: "short-answer",
      question: "What is a Haar cascade classifier used for?",
      correctAnswer: "Object detection, especially faces",
      explanation: "Haar cascades are used for detecting objects in images."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to convert an image to grayscale?",
      options: ["cv2.cvtColor", "cv2.gray", "cv2.toGray", "cv2.convertGray"],
      correctAnswer: "cv2.cvtColor",
      explanation: "cv2.cvtColor with the correct flag converts to grayscale."
    },
    {
      type: "true-false",
      question: "OpenCV can interface with deep learning frameworks like TensorFlow and PyTorch.",
      correctAnswer: true,
      explanation: "OpenCV supports DNN modules for deep learning."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to write an image to disk?",
      options: ["cv2.imwrite", "cv2.save", "cv2.write", "cv2.export"],
      correctAnswer: "cv2.imwrite",
      explanation: "cv2.imwrite saves images to disk."
    },
    {
      type: "short-answer",
      question: "What is the purpose of morphological operations in image processing?",
      correctAnswer: "To process shapes and structures in binary images",
      explanation: "Morphological operations clean up or enhance shapes."
    },
    {
      type: "multiple-choice",
      question: "Which function is used for template matching in OpenCV?",
      options: ["cv2.matchTemplate", "cv2.templateMatch", "cv2.findTemplate", "cv2.match"],
      correctAnswer: "cv2.matchTemplate",
      explanation: "cv2.matchTemplate finds template matches in images."
    },
    {
      type: "true-false",
      question: "OpenCV can perform camera calibration and 3D reconstruction.",
      correctAnswer: true,
      explanation: "OpenCV supports advanced computer vision tasks."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to apply a Gaussian blur to an image?",
      options: ["cv2.GaussianBlur", "cv2.blur", "cv2.smooth", "cv2.filter"],
      correctAnswer: "cv2.GaussianBlur",
      explanation: "cv2.GaussianBlur applies a Gaussian filter."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using OpenCV for computer vision?",
      correctAnswer: "Comprehensive, fast, and open-source library for image and video processing",
      explanation: "OpenCV is widely used for its speed and features."
    }
  ],
  "Reinforcement Learning Basics": [
    // 20+ advanced questions for Reinforcement Learning Basics
    {
      type: "multiple-choice",
      question: "Which element is NOT part of a Markov Decision Process (MDP)?",
      options: ["Reward", "Policy", "State", "Gradient"],
      correctAnswer: "Gradient",
      explanation: "MDPs consist of states, actions, rewards, and policies."
    },
    {
      type: "multiple-choice",
      question: "What is the main goal of a reinforcement learning agent?",
      options: ["Maximize cumulative reward", "Minimize loss", "Classify data", "Cluster data"],
      correctAnswer: "Maximize cumulative reward",
      explanation: "RL agents seek to maximize total reward over time."
    },
    {
      type: "true-false",
      question: "The exploration-exploitation tradeoff is central to RL.",
      correctAnswer: true,
      explanation: "Agents must balance exploring new actions and exploiting known rewards."
    },
    {
      type: "short-answer",
      question: "What is a policy in reinforcement learning?",
      correctAnswer: "A mapping from states to actions",
      explanation: "A policy determines the agent's behavior."
    },
    {
      type: "multiple-choice",
      question: "Which algorithm is model-free?",
      options: ["Q-learning", "Value Iteration", "Policy Iteration", "Dynamic Programming"],
      correctAnswer: "Q-learning",
      explanation: "Q-learning does not require a model of the environment."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the discount factor (gamma) in RL?",
      options: ["To prioritize immediate rewards over future rewards", "To increase learning rate", "To reduce variance", "To normalize rewards"],
      correctAnswer: "To prioritize immediate rewards over future rewards",
      explanation: "Gamma discounts future rewards."
    },
    {
      type: "true-false",
      question: "Temporal Difference (TD) learning combines ideas from Monte Carlo and Dynamic Programming.",
      correctAnswer: true,
      explanation: "TD learning uses bootstrapping and sampling."
    },
    {
      type: "multiple-choice",
      question: "Which method is used for policy improvement in RL?",
      options: ["Policy Gradient", "Q-learning", "SARSA", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All these methods can improve policies."
    },
    {
      type: "short-answer",
      question: "What is the difference between on-policy and off-policy learning?",
      correctAnswer: "On-policy learns from actions taken by the current policy, off-policy learns from other policies",
      explanation: "On-policy (e.g., SARSA), off-policy (e.g., Q-learning)."
    },
    {
      type: "multiple-choice",
      question: "Which algorithm is used for continuous action spaces?",
      options: ["DDPG", "Q-learning", "SARSA", "Monte Carlo"],
      correctAnswer: "DDPG",
      explanation: "Deep Deterministic Policy Gradient handles continuous actions."
    },
    {
      type: "true-false",
      question: "Reward shaping can accelerate learning in RL.",
      correctAnswer: true,
      explanation: "Reward shaping provides additional feedback to the agent."
    },
    {
      type: "multiple-choice",
      question: "Which function estimates the expected return from a state?",
      options: ["Value function", "Policy function", "Reward function", "Transition function"],
      correctAnswer: "Value function",
      explanation: "Value functions estimate expected returns."
    },
    {
      type: "short-answer",
      question: "What is an episode in RL?",
      correctAnswer: "A sequence of states, actions, and rewards ending in a terminal state",
      explanation: "Episodes are complete runs from start to finish."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to reduce variance in policy gradient methods?",
      options: ["Baseline subtraction", "Increasing learning rate", "Reward normalization", "Discounting rewards"],
      correctAnswer: "Baseline subtraction",
      explanation: "Subtracting a baseline reduces variance."
    },
    {
      type: "true-false",
      question: "Deep Q-Networks (DQN) use neural networks to approximate Q-values.",
      correctAnswer: true,
      explanation: "DQN uses deep learning for Q-value estimation."
    },
    {
      type: "multiple-choice",
      question: "Which technique is used to encourage exploration in RL?",
      options: ["Epsilon-greedy", "Greedy", "Deterministic", "Random"],
      correctAnswer: "Epsilon-greedy",
      explanation: "Epsilon-greedy randomly explores actions."
    },
    {
      type: "short-answer",
      question: "What is the Bellman equation used for?",
      correctAnswer: "To relate the value of a state to the values of successor states",
      explanation: "Bellman equations are fundamental to RL."
    },
    {
      type: "multiple-choice",
      question: "Which RL method is best for environments with sparse rewards?",
      options: ["Monte Carlo", "Policy Gradient", "Reward Shaping", "Q-learning"],
      correctAnswer: "Reward Shaping",
      explanation: "Reward shaping helps in sparse reward settings."
    },
    {
      type: "true-false",
      question: "Actor-Critic methods combine value-based and policy-based approaches.",
      correctAnswer: true,
      explanation: "Actor-Critic uses both value and policy networks."
    },
    {
      type: "multiple-choice",
      question: "Which is a challenge unique to RL compared to supervised learning?",
      options: ["Credit assignment problem", "Overfitting", "Feature scaling", "Data normalization"],
      correctAnswer: "Credit assignment problem",
      explanation: "Credit assignment is a core RL challenge."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using RL for control problems?",
      correctAnswer: "Ability to learn optimal policies through trial and error",
      explanation: "RL learns by interacting with the environment."
    }
  ],
  "Data Engineering with Airflow": [
    // 20+ advanced questions for Data Engineering with Airflow
    {
      type: "multiple-choice",
      question: "What is a DAG in Apache Airflow?",
      options: ["Directed Acyclic Graph", "Data Analysis Group", "Distributed Application Gateway", "Data Aggregation Graph"],
      correctAnswer: "Directed Acyclic Graph",
      explanation: "A DAG defines the workflow structure in Airflow."
    },
    {
      type: "multiple-choice",
      question: "Which operator is used to execute Python code in Airflow?",
      options: ["PythonOperator", "BashOperator", "BranchOperator", "DummyOperator"],
      correctAnswer: "PythonOperator",
      explanation: "PythonOperator runs Python callables in Airflow tasks."
    },
    {
      type: "true-false",
      question: "Airflow schedules DAG runs based on cron expressions.",
      correctAnswer: true,
      explanation: "Airflow uses cron-like syntax for scheduling."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the XCom feature in Airflow?",
      correctAnswer: "To allow tasks to exchange small amounts of data",
      explanation: "XComs are used for inter-task communication."
    },
    {
      type: "multiple-choice",
      question: "Which Airflow component is responsible for executing tasks?",
      options: ["Worker", "Scheduler", "Webserver", "Database"],
      correctAnswer: "Worker",
      explanation: "Workers execute the actual tasks in Airflow."
    },
    {
      type: "multiple-choice",
      question: "Which backend database is NOT supported by Airflow?",
      options: ["SQLite", "PostgreSQL", "MySQL", "MongoDB"],
      correctAnswer: "MongoDB",
      explanation: "MongoDB is not a supported backend for Airflow metadata."
    },
    {
      type: "true-false",
      question: "Airflow supports dynamic DAG generation using Python code.",
      correctAnswer: true,
      explanation: "DAGs can be generated programmatically in Python."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to start the Airflow webserver?",
      options: ["airflow webserver", "airflow start", "airflow run", "airflow serve"],
      correctAnswer: "airflow webserver",
      explanation: "'airflow webserver' starts the UI."
    },
    {
      type: "short-answer",
      question: "What is a task instance in Airflow?",
      correctAnswer: "A specific run of a task for a DAG run",
      explanation: "Task instances represent a task's execution for a DAG run."
    },
    {
      type: "multiple-choice",
      question: "Which Airflow feature allows conditional branching in workflows?",
      options: ["BranchPythonOperator", "SubDagOperator", "DummyOperator", "BashOperator"],
      correctAnswer: "BranchPythonOperator",
      explanation: "BranchPythonOperator enables conditional logic."
    },
    {
      type: "true-false",
      question: "Airflow can retry failed tasks automatically.",
      correctAnswer: true,
      explanation: "Retries are configurable in task parameters."
    },
    {
      type: "multiple-choice",
      question: "Which Airflow component is responsible for scheduling DAG runs?",
      options: ["Scheduler", "Worker", "Webserver", "Executor"],
      correctAnswer: "Scheduler",
      explanation: "The scheduler triggers DAG runs based on schedule intervals."
    },
    {
      type: "short-answer",
      question: "What is the purpose of Airflow connections?",
      correctAnswer: "To store credentials and connection info for external systems",
      explanation: "Connections manage access to databases, APIs, etc."
    },
    {
      type: "multiple-choice",
      question: "Which executor is used for running tasks locally in Airflow?",
      options: ["SequentialExecutor", "LocalExecutor", "CeleryExecutor", "KubernetesExecutor"],
      correctAnswer: "LocalExecutor",
      explanation: "LocalExecutor runs tasks in parallel on the local machine."
    },
    {
      type: "true-false",
      question: "Airflow supports task dependencies using set_upstream and set_downstream methods.",
      correctAnswer: true,
      explanation: "These methods define task order."
    },
    {
      type: "multiple-choice",
      question: "Which Airflow feature is used for monitoring and alerting?",
      options: ["SLAs", "XComs", "Pools", "Variables"],
      correctAnswer: "SLAs",
      explanation: "SLAs trigger alerts if tasks exceed expected duration."
    },
    {
      type: "short-answer",
      question: "What is a SubDAG in Airflow?",
      correctAnswer: "A DAG defined as a task within another DAG",
      explanation: "SubDAGs allow modular workflow design."
    },
    {
      type: "multiple-choice",
      question: "Which Airflow feature allows parameterization of DAGs?",
      options: ["Variables", "Pools", "XComs", "SLAs"],
      correctAnswer: "Variables",
      explanation: "Variables store key-value pairs for parameterization."
    },
    {
      type: "true-false",
      question: "Airflow can trigger external DAGs using TriggerDagRunOperator.",
      correctAnswer: true,
      explanation: "TriggerDagRunOperator starts other DAGs."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to initialize the Airflow metadata database?",
      options: ["airflow db init", "airflow initdb", "airflow db reset", "airflow db migrate"],
      correctAnswer: "airflow db init",
      explanation: "'airflow db init' initializes the metadata DB."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using Airflow for data engineering?",
      correctAnswer: "Orchestration, scheduling, and monitoring of complex data pipelines",
      explanation: "Airflow is designed for workflow automation and observability."
    }
  ],
  "DevOps Fundamentals": [
    // 20+ advanced questions for DevOps Fundamentals
    {
      type: "multiple-choice",
      question: "What is the main goal of DevOps?",
      options: ["Faster delivery of high-quality software", "Reduce hardware costs", "Increase manual testing", "Eliminate automation"],
      correctAnswer: "Faster delivery of high-quality software",
      explanation: "DevOps aims to improve delivery speed and quality."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used for configuration management?",
      options: ["Ansible", "Jenkins", "Docker", "Kubernetes"],
      correctAnswer: "Ansible",
      explanation: "Ansible automates configuration and provisioning."
    },
    {
      type: "true-false",
      question: "Continuous Integration (CI) involves automatically building and testing code on every commit.",
      correctAnswer: true,
      explanation: "CI automates build and test processes."
    },
    {
      type: "short-answer",
      question: "What is Infrastructure as Code (IaC)?",
      correctAnswer: "Managing infrastructure using machine-readable configuration files",
      explanation: "IaC enables automated, versioned infrastructure."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for container orchestration?",
      options: ["Kubernetes", "Docker", "Terraform", "Git"],
      correctAnswer: "Kubernetes",
      explanation: "Kubernetes manages containerized applications."
    },
    {
      type: "multiple-choice",
      question: "Which practice involves deploying code to production as soon as it passes automated tests?",
      options: ["Continuous Deployment", "Continuous Integration", "Continuous Delivery", "Manual Deployment"],
      correctAnswer: "Continuous Deployment",
      explanation: "Continuous Deployment automates releases to production."
    },
    {
      type: "true-false",
      question: "DevOps encourages collaboration between development and operations teams.",
      correctAnswer: true,
      explanation: "DevOps breaks down silos between teams."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for monitoring and alerting in DevOps?",
      options: ["Prometheus", "Docker", "Jenkins", "Git"],
      correctAnswer: "Prometheus",
      explanation: "Prometheus is a popular monitoring tool."
    },
    {
      type: "short-answer",
      question: "What is a blue-green deployment?",
      correctAnswer: "A deployment strategy with two environments for zero-downtime releases",
      explanation: "Blue-green deployments reduce downtime and risk."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for automating build pipelines?",
      options: ["Jenkins", "Ansible", "Docker", "Nagios"],
      correctAnswer: "Jenkins",
      explanation: "Jenkins automates build and deployment pipelines."
    },
    {
      type: "true-false",
      question: "Immutable infrastructure means servers are never modified after deployment.",
      correctAnswer: true,
      explanation: "Immutable infrastructure is replaced, not changed in place."
    },
    {
      type: "multiple-choice",
      question: "Which practice helps prevent configuration drift?",
      options: ["Infrastructure as Code", "Manual configuration", "Ad-hoc scripts", "No version control"],
      correctAnswer: "Infrastructure as Code",
      explanation: "IaC ensures consistent, versioned infrastructure."
    },
    {
      type: "short-answer",
      question: "What is the purpose of a canary deployment?",
      correctAnswer: "To release new features to a small subset of users before full rollout",
      explanation: "Canary deployments reduce risk by testing changes on a small group."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for log aggregation and analysis?",
      options: ["ELK Stack", "Docker", "Kubernetes", "Terraform"],
      correctAnswer: "ELK Stack",
      explanation: "ELK (Elasticsearch, Logstash, Kibana) is used for log analysis."
    },
    {
      type: "true-false",
      question: "DevOps teams should automate security testing as part of the CI/CD pipeline.",
      correctAnswer: true,
      explanation: "Security automation is a DevSecOps best practice."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for provisioning cloud infrastructure?",
      options: ["Terraform", "Jenkins", "Prometheus", "Docker"],
      correctAnswer: "Terraform",
      explanation: "Terraform automates cloud resource provisioning."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using containers in DevOps?",
      correctAnswer: "Portability and consistency across environments",
      explanation: "Containers ensure consistent app behavior."
    },
    {
      type: "multiple-choice",
      question: "Which practice involves frequent, small code changes and deployments?",
      options: ["Continuous Delivery", "Waterfall", "Big Bang Deployment", "Manual Release"],
      correctAnswer: "Continuous Delivery",
      explanation: "Continuous Delivery encourages frequent, small releases."
    },
    {
      type: "true-false",
      question: "DevOps metrics include deployment frequency and mean time to recovery (MTTR).",
      correctAnswer: true,
      explanation: "These metrics measure DevOps performance."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for container image management?",
      options: ["Docker Hub", "Jenkins", "Prometheus", "Ansible"],
      correctAnswer: "Docker Hub",
      explanation: "Docker Hub stores and manages container images."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using microservices in DevOps?",
      correctAnswer: "Scalability, flexibility, and independent deployments",
      explanation: "Microservices enable agile, scalable architectures."
    }
  ],
  "Cloud Computing with AWS": [
    // 20+ advanced questions for Cloud Computing with AWS
    {
      type: "multiple-choice",
      question: "What is the main benefit of using AWS EC2?",
      options: ["Scalable virtual servers on demand", "Managed databases", "Serverless functions", "Object storage"],
      correctAnswer: "Scalable virtual servers on demand",
      explanation: "EC2 provides scalable compute resources."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for object storage?",
      options: ["S3", "EC2", "RDS", "Lambda"],
      correctAnswer: "S3",
      explanation: "S3 is AWS's object storage service."
    },
    {
      type: "true-false",
      question: "AWS IAM is used for identity and access management.",
      correctAnswer: true,
      explanation: "IAM manages users, roles, and permissions."
    },
    {
      type: "short-answer",
      question: "What is an AWS VPC?",
      correctAnswer: "A logically isolated virtual network in AWS",
      explanation: "VPCs provide network isolation and control."
    },
    {
      type: "multiple-choice",
      question: "Which service is used for managed relational databases on AWS?",
      options: ["RDS", "DynamoDB", "S3", "EC2"],
      correctAnswer: "RDS",
      explanation: "RDS is AWS's managed relational database service."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for serverless compute?",
      options: ["Lambda", "EC2", "S3", "ECS"],
      correctAnswer: "Lambda",
      explanation: "Lambda runs code without managing servers."
    },
    {
      type: "true-false",
      question: "AWS CloudFormation is used for infrastructure as code.",
      correctAnswer: true,
      explanation: "CloudFormation automates infrastructure provisioning."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for monitoring and logging?",
      options: ["CloudWatch", "S3", "IAM", "ECS"],
      correctAnswer: "CloudWatch",
      explanation: "CloudWatch monitors resources and applications."
    },
    {
      type: "short-answer",
      question: "What is the purpose of AWS Auto Scaling?",
      correctAnswer: "To automatically adjust compute resources based on demand",
      explanation: "Auto Scaling ensures optimal resource usage."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for content delivery and caching?",
      options: ["CloudFront", "S3", "EC2", "RDS"],
      correctAnswer: "CloudFront",
      explanation: "CloudFront is AWS's CDN service."
    },
    {
      type: "true-false",
      question: "AWS S3 provides eventual consistency for overwrite PUTS and DELETES.",
      correctAnswer: true,
      explanation: "S3 is eventually consistent for some operations."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for managed NoSQL databases?",
      options: ["DynamoDB", "RDS", "S3", "EC2"],
      correctAnswer: "DynamoDB",
      explanation: "DynamoDB is AWS's managed NoSQL database."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using AWS Lambda?",
      correctAnswer: "Serverless, event-driven compute with automatic scaling",
      explanation: "Lambda runs code in response to events."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for container orchestration?",
      options: ["ECS", "EC2", "S3", "RDS"],
      correctAnswer: "ECS",
      explanation: "ECS manages Docker containers on AWS."
    },
    {
      type: "true-false",
      question: "AWS Route 53 is used for DNS and domain management.",
      correctAnswer: true,
      explanation: "Route 53 provides DNS and domain registration."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for data warehousing?",
      options: ["Redshift", "RDS", "DynamoDB", "S3"],
      correctAnswer: "Redshift",
      explanation: "Redshift is AWS's data warehouse solution."
    },
    {
      type: "short-answer",
      question: "What is the purpose of AWS IAM roles?",
      correctAnswer: "To grant permissions to AWS services and users securely",
      explanation: "IAM roles provide temporary credentials and permissions."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for message queuing?",
      options: ["SQS", "SNS", "SES", "Kinesis"],
      correctAnswer: "SQS",
      explanation: "SQS is AWS's Simple Queue Service."
    },
    {
      type: "true-false",
      question: "AWS supports hybrid cloud architectures.",
      correctAnswer: true,
      explanation: "AWS can integrate with on-premises infrastructure."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used for real-time data streaming?",
      options: ["Kinesis", "S3", "EC2", "RDS"],
      correctAnswer: "Kinesis",
      explanation: "Kinesis handles real-time data streams."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using AWS CloudFormation templates?",
      correctAnswer: "Automated, repeatable infrastructure deployment",
      explanation: "CloudFormation enables infrastructure as code."
    }
  ],
  "Next.js in Practice": [
    {
      type: "multiple-choice",
      question: "Which method enables static site generation for a dynamic route in Next.js?",
      options: ["getServerSideProps", "getStaticProps", "getStaticPaths", "getInitialProps"],
      correctAnswer: "getStaticPaths",
      explanation: "getStaticPaths is used with getStaticProps to enable static generation for dynamic routes."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of Incremental Static Regeneration (ISR) in Next.js?",
      options: ["Faster builds", "On-demand static updates", "Server-side rendering only", "No need for a CDN"],
      correctAnswer: "On-demand static updates",
      explanation: "ISR allows static pages to be updated after deployment without rebuilding the whole site."
    },
    {
      type: "true-false",
      question: "Next.js supports both static and server-side rendering in the same application.",
      correctAnswer: true,
      explanation: "You can use static generation and server-side rendering on a per-page basis."
    },
    {
      type: "short-answer",
      question: "Which file is used to customize the default HTML document structure in Next.js?",
      correctAnswer: "_document.js",
      explanation: "_document.js allows you to augment the application's HTML and <body> tags."
    },
    {
      type: "multiple-choice",
      question: "Which Next.js API is used for client-side navigation?",
      options: ["useRouter", "Link", "Router", "navigate"],
      correctAnswer: "Link",
      explanation: "The Link component enables client-side navigation between routes."
    },
    {
      type: "multiple-choice",
      question: "What is the default folder for static assets in a Next.js project?",
      options: ["/static", "/public", "/assets", "/static-assets"],
      correctAnswer: "/public",
      explanation: "The /public folder is used for static assets in Next.js."
    },
    {
      type: "true-false",
      question: "API routes in Next.js can only be used for GET requests.",
      correctAnswer: false,
      explanation: "API routes support all HTTP methods."
    },
    {
      type: "short-answer",
      question: "What hook is used to access the router object in a Next.js component?",
      correctAnswer: "useRouter",
      explanation: "useRouter is the hook for accessing the router object."
    },
    {
      type: "multiple-choice",
      question: "Which command builds a Next.js app for production?",
      options: ["next dev", "next build", "next start", "next prod"],
      correctAnswer: "next build",
      explanation: "next build compiles the app for production."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of getServerSideProps?",
      options: ["Static generation", "Client-side data fetching", "Server-side rendering at request time", "API route creation"],
      correctAnswer: "Server-side rendering at request time",
      explanation: "getServerSideProps fetches data at request time for SSR."
    },
    {
      type: "true-false",
      question: "Dynamic imports in Next.js can be used to enable code splitting.",
      correctAnswer: true,
      explanation: "Dynamic imports allow code splitting and lazy loading."
    },
    {
      type: "short-answer",
      question: "What is the default port for running a Next.js app in development mode?",
      correctAnswer: "3000",
      explanation: "Next.js runs on port 3000 by default."
    },
    {
      type: "multiple-choice",
      question: "Which file is used to override the default App component in Next.js?",
      options: ["_app.js", "_document.js", "_main.js", "_root.js"],
      correctAnswer: "_app.js",
      explanation: "_app.js is used to initialize pages."
    },
    {
      type: "multiple-choice",
      question: "What is the recommended way to add global CSS in Next.js?",
      options: ["Import in _app.js", "Import in _document.js", "Import in each page", "Use inline styles"],
      correctAnswer: "Import in _app.js",
      explanation: "Global CSS should be imported in _app.js."
    },
    {
      type: "true-false",
      question: "Next.js supports image optimization out of the box.",
      correctAnswer: true,
      explanation: "The Next.js Image component provides built-in image optimization."
    },
    {
      type: "short-answer",
      question: "Which Next.js feature allows you to prefetch linked pages?",
      correctAnswer: "Link prefetching",
      explanation: "The Link component prefetches pages in the background."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between getInitialProps and getServerSideProps?",
      options: ["getInitialProps runs on both client and server, getServerSideProps only on server", "getServerSideProps is deprecated", "getInitialProps is faster", "No difference"],
      correctAnswer: "getInitialProps runs on both client and server, getServerSideProps only on server",
      explanation: "getInitialProps can run on both, getServerSideProps only on the server."
    },
    {
      type: "multiple-choice",
      question: "Which environment variable is used to set the base path in Next.js?",
      options: ["NEXT_PUBLIC_BASE_PATH", "NEXT_BASE_PATH", "BASE_PATH", "NEXT_PATH"],
      correctAnswer: "NEXT_PUBLIC_BASE_PATH",
      explanation: "NEXT_PUBLIC_BASE_PATH sets the base path for the app."
    },
    {
      type: "true-false",
      question: "You can deploy a Next.js app as a static site to Vercel.",
      correctAnswer: true,
      explanation: "Vercel supports static and hybrid Next.js deployments."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of using the Head component in Next.js?",
      correctAnswer: "To manage the document head for SEO and meta tags",
      explanation: "The Head component allows you to set meta tags for each page."
    },
    {
      type: "multiple-choice",
      question: "Which Next.js feature allows you to create API endpoints in the same project?",
      options: ["API routes", "getServerSideProps", "getStaticProps", "Middleware"],
      correctAnswer: "API routes",
      explanation: "API routes let you create backend endpoints in the /pages/api directory."
    }
  ],
  "Azure Cloud Basics": [
    {
      type: "multiple-choice",
      question: "Which Azure service provides serverless compute capabilities?",
      options: ["Azure Functions", "Azure App Service", "Azure VMs", "Azure Logic Apps"],
      correctAnswer: "Azure Functions",
      explanation: "Azure Functions is the serverless compute offering in Azure."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of Azure Resource Manager (ARM) templates?",
      options: ["Automate resource provisioning", "Monitor resources", "Manage billing", "Configure networking"],
      correctAnswer: "Automate resource provisioning",
      explanation: "ARM templates are used for infrastructure as code in Azure."
    },
    {
      type: "true-false",
      question: "Azure Blob Storage is optimized for storing large amounts of unstructured data.",
      correctAnswer: true,
      explanation: "Blob Storage is designed for unstructured data like images, videos, and backups."
    },
    {
      type: "short-answer",
      question: "Which Azure service is used for hosting relational databases?",
      correctAnswer: "Azure SQL Database",
      explanation: "Azure SQL Database is a managed relational database service."
    },
    {
      type: "multiple-choice",
      question: "Which Azure service provides a managed Kubernetes environment?",
      options: ["AKS", "ACS", "Azure Container Instances", "Azure Batch"],
      correctAnswer: "AKS",
      explanation: "Azure Kubernetes Service (AKS) is the managed Kubernetes offering."
    },
    {
      type: "multiple-choice",
      question: "What is the default protocol for secure communication in Azure Virtual Networks?",
      options: ["HTTPS", "IPSec", "SSL", "TLS"],
      correctAnswer: "IPSec",
      explanation: "IPSec is commonly used for secure VPN connections in Azure."
    },
    {
      type: "true-false",
      question: "Azure Active Directory can be used for single sign-on across multiple applications.",
      correctAnswer: true,
      explanation: "Azure AD provides SSO and identity management."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of Azure Availability Zones?",
      correctAnswer: "High availability and fault isolation",
      explanation: "Availability Zones provide redundancy and fault tolerance."
    },
    {
      type: "multiple-choice",
      question: "Which Azure service is best for real-time analytics on streaming data?",
      options: ["Azure Stream Analytics", "Azure Data Lake", "Azure Synapse", "Azure Data Factory"],
      correctAnswer: "Azure Stream Analytics",
      explanation: "Stream Analytics is designed for real-time data processing."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between Azure Functions and Azure Logic Apps?",
      options: ["Functions are code-based, Logic Apps are workflow-based", "Logic Apps are serverless, Functions are not", "Functions are for data storage", "No difference"],
      correctAnswer: "Functions are code-based, Logic Apps are workflow-based",
      explanation: "Functions run code, Logic Apps orchestrate workflows."
    },
    {
      type: "true-false",
      question: "Azure Cosmos DB supports multiple consistency models.",
      correctAnswer: true,
      explanation: "Cosmos DB offers five consistency levels."
    },
    {
      type: "short-answer",
      question: "Which Azure service is used for hosting static websites?",
      correctAnswer: "Azure Blob Storage",
      explanation: "Blob Storage can serve static websites directly."
    },
    {
      type: "multiple-choice",
      question: "Which Azure service provides distributed denial-of-service (DDoS) protection?",
      options: ["Azure DDoS Protection", "Azure Firewall", "Azure Security Center", "Azure Sentinel"],
      correctAnswer: "Azure DDoS Protection",
      explanation: "Azure DDoS Protection safeguards against DDoS attacks."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of Azure Key Vault?",
      options: ["Store secrets and certificates", "Monitor resources", "Manage billing", "Configure networking"],
      correctAnswer: "Store secrets and certificates",
      explanation: "Key Vault is for secure storage of secrets, keys, and certificates."
    },
    {
      type: "true-false",
      question: "Azure Logic Apps can integrate with on-premises systems.",
      correctAnswer: true,
      explanation: "Logic Apps can connect to on-premises data gateways."
    },
    {
      type: "short-answer",
      question: "Which Azure service is used for monitoring and logging?",
      correctAnswer: "Azure Monitor",
      explanation: "Azure Monitor provides metrics, logs, and alerts."
    },
    {
      type: "multiple-choice",
      question: "Which Azure service is best for hosting containerized web apps without managing servers?",
      options: ["Azure Container Instances", "AKS", "App Service", "Azure Batch"],
      correctAnswer: "Azure Container Instances",
      explanation: "Container Instances is a serverless container hosting service."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of Azure Policy?",
      options: ["Enforce compliance and governance", "Monitor billing", "Manage networking", "Automate deployments"],
      correctAnswer: "Enforce compliance and governance",
      explanation: "Azure Policy helps enforce organizational standards."
    },
    {
      type: "true-false",
      question: "Azure supports hybrid cloud deployments.",
      correctAnswer: true,
      explanation: "Azure Arc and other services enable hybrid cloud."
    },
    {
      type: "short-answer",
      question: "Which Azure service is used for automating resource deployments using code?",
      correctAnswer: "Azure Resource Manager (ARM) templates",
      explanation: "ARM templates enable infrastructure as code."
    },
    {
      type: "multiple-choice",
      question: "Which Azure service provides a fully managed NoSQL database?",
      options: ["Cosmos DB", "Azure SQL Database", "Azure Table Storage", "Azure Data Lake"],
      correctAnswer: "Cosmos DB",
      explanation: "Cosmos DB is a globally distributed NoSQL database."
    }
  ],
  "Google Cloud Platform": [
    {
      type: "multiple-choice",
      question: "Which GCP service is primarily used for serverless compute?",
      options: ["Cloud Functions", "Compute Engine", "App Engine", "Cloud Run"],
      correctAnswer: "Cloud Functions",
      explanation: "Cloud Functions is GCP's serverless compute platform for event-driven workloads."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between Cloud Run and App Engine?",
      options: ["Cloud Run is for containers, App Engine is for code", "App Engine is serverless, Cloud Run is not", "Cloud Run is only for Node.js", "No difference"],
      correctAnswer: "Cloud Run is for containers, App Engine is for code",
      explanation: "Cloud Run runs containers, App Engine runs code in supported runtimes."
    },
    {
      type: "true-false",
      question: "GCP's BigQuery is a fully managed, serverless data warehouse.",
      correctAnswer: true,
      explanation: "BigQuery is a serverless, highly scalable data warehouse."
    },
    {
      type: "short-answer",
      question: "Which GCP service provides managed Kubernetes?",
      correctAnswer: "Google Kubernetes Engine (GKE)",
      explanation: "GKE is the managed Kubernetes service on GCP."
    },
    {
      type: "multiple-choice",
      question: "Which GCP service is best for real-time messaging and event ingestion?",
      options: ["Pub/Sub", "Dataflow", "Dataproc", "Spanner"],
      correctAnswer: "Pub/Sub",
      explanation: "Pub/Sub is used for real-time messaging and event ingestion."
    },
    {
      type: "multiple-choice",
      question: "What is the default network type in GCP projects?",
      options: ["Default VPC", "Custom VPC", "Legacy Network", "Shared VPC"],
      correctAnswer: "Default VPC",
      explanation: "Every new GCP project gets a default VPC network."
    },
    {
      type: "true-false",
      question: "Cloud Storage in GCP supports object versioning.",
      correctAnswer: true,
      explanation: "Object versioning can be enabled in Cloud Storage buckets."
    },
    {
      type: "short-answer",
      question: "Which GCP service is used for global load balancing?",
      correctAnswer: "Cloud Load Balancing",
      explanation: "Cloud Load Balancing provides global, scalable load balancing."
    },
    {
      type: "multiple-choice",
      question: "Which GCP service provides a fully managed NoSQL document database?",
      options: ["Firestore", "Bigtable", "Datastore", "Spanner"],
      correctAnswer: "Firestore",
      explanation: "Firestore is a fully managed NoSQL document database."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of Cloud Identity and Access Management (IAM)?",
      options: ["Manage permissions and roles", "Monitor billing", "Configure networking", "Store secrets"],
      correctAnswer: "Manage permissions and roles",
      explanation: "IAM manages access to GCP resources."
    },
    {
      type: "true-false",
      question: "GCP's Cloud Functions can be triggered by HTTP requests, Pub/Sub, and Cloud Storage events.",
      correctAnswer: true,
      explanation: "Cloud Functions support multiple event sources."
    },
    {
      type: "short-answer",
      question: "Which GCP service is used for continuous integration and delivery?",
      correctAnswer: "Cloud Build",
      explanation: "Cloud Build is GCP's CI/CD service."
    },
    {
      type: "multiple-choice",
      question: "Which GCP service is best for running Hadoop and Spark jobs?",
      options: ["Dataproc", "Dataflow", "BigQuery", "Composer"],
      correctAnswer: "Dataproc",
      explanation: "Dataproc is a managed Spark and Hadoop service."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using Preemptible VMs in GCP?",
      options: ["Lower cost", "Higher performance", "Persistent storage", "Longer uptime"],
      correctAnswer: "Lower cost",
      explanation: "Preemptible VMs are much cheaper but can be terminated at any time."
    },
    {
      type: "true-false",
      question: "GCP's Cloud Armor provides DDoS protection.",
      correctAnswer: true,
      explanation: "Cloud Armor is GCP's DDoS protection service."
    },
    {
      type: "short-answer",
      question: "Which GCP service is used for workflow orchestration?",
      correctAnswer: "Cloud Composer",
      explanation: "Cloud Composer is based on Apache Airflow for workflow orchestration."
    },
    {
      type: "multiple-choice",
      question: "Which GCP service is best for storing large binary objects?",
      options: ["Cloud Storage", "BigQuery", "Firestore", "Spanner"],
      correctAnswer: "Cloud Storage",
      explanation: "Cloud Storage is used for storing large objects (blobs)."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of VPC Peering in GCP?",
      options: ["Connect VPC networks privately", "Monitor billing", "Manage IAM", "Store secrets"],
      correctAnswer: "Connect VPC networks privately",
      explanation: "VPC Peering allows private connectivity between VPCs."
    },
    {
      type: "true-false",
      question: "GCP supports hybrid and multi-cloud deployments.",
      correctAnswer: true,
      explanation: "GCP offers tools for hybrid and multi-cloud."
    },
    {
      type: "short-answer",
      question: "Which GCP service is used for secret management?",
      correctAnswer: "Secret Manager",
      explanation: "Secret Manager stores and manages secrets."
    },
    {
      type: "multiple-choice",
      question: "Which GCP service provides managed MySQL and PostgreSQL databases?",
      options: ["Cloud SQL", "Spanner", "Bigtable", "Firestore"],
      correctAnswer: "Cloud SQL",
      explanation: "Cloud SQL is the managed relational database service."
    }
  ],
  "Docker & Containerization": [
    {
      type: "multiple-choice",
      question: "Which Docker command is used to build an image from a Dockerfile?",
      options: ["docker build", "docker run", "docker create", "docker compose"],
      correctAnswer: "docker build",
      explanation: "docker build is used to create an image from a Dockerfile."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between a Docker image and a Docker container?",
      options: ["Image is static, container is running", "Container is static, image is running", "No difference", "Image is a VM"],
      correctAnswer: "Image is static, container is running",
      explanation: "An image is a template, a container is a running instance of that image."
    },
    {
      type: "true-false",
      question: "Docker Compose can be used to define and run multi-container applications.",
      correctAnswer: true,
      explanation: "Docker Compose is designed for multi-container orchestration."
    },
    {
      type: "short-answer",
      question: "Which file is used by Docker Compose to define services?",
      correctAnswer: "docker-compose.yml",
      explanation: "docker-compose.yml defines services, networks, and volumes."
    },
    {
      type: "multiple-choice",
      question: "Which Docker command is used to list all running containers?",
      options: ["docker ps", "docker images", "docker ls", "docker status"],
      correctAnswer: "docker ps",
      explanation: "docker ps lists running containers."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a Docker volume?",
      options: ["Persist data", "Increase performance", "Reduce image size", "Manage networks"],
      correctAnswer: "Persist data",
      explanation: "Volumes are used to persist and share data between containers."
    },
    {
      type: "true-false",
      question: "A Docker container can run multiple processes by default.",
      correctAnswer: false,
      explanation: "Best practice is one process per container, though it is technically possible."
    },
    {
      type: "short-answer",
      question: "Which command is used to remove all stopped containers?",
      correctAnswer: "docker container prune",
      explanation: "docker container prune removes all stopped containers."
    },
    {
      type: "multiple-choice",
      question: "Which instruction in a Dockerfile is used to specify the base image?",
      options: ["FROM", "RUN", "CMD", "ENTRYPOINT"],
      correctAnswer: "FROM",
      explanation: "FROM specifies the base image in a Dockerfile."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using multi-stage builds in Docker?",
      options: ["Smaller images", "Faster networking", "More containers", "Better logging"],
      correctAnswer: "Smaller images",
      explanation: "Multi-stage builds help reduce final image size."
    },
    {
      type: "true-false",
      question: "Docker images are immutable once built.",
      correctAnswer: true,
      explanation: "Images are immutable; containers can be changed, but images are not."
    },
    {
      type: "short-answer",
      question: "Which Docker command is used to push an image to Docker Hub?",
      correctAnswer: "docker push",
      explanation: "docker push uploads an image to a registry."
    },
    {
      type: "multiple-choice",
      question: "Which network mode allows containers to share the host's network stack?",
      options: ["host", "bridge", "overlay", "none"],
      correctAnswer: "host",
      explanation: "host mode shares the host's network stack."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of the ENTRYPOINT instruction in a Dockerfile?",
      options: ["Set the main command to run", "Set environment variables", "Expose ports", "Copy files"],
      correctAnswer: "Set the main command to run",
      explanation: "ENTRYPOINT sets the main command for the container."
    },
    {
      type: "true-false",
      question: "Docker Swarm is a native clustering and orchestration tool for Docker.",
      correctAnswer: true,
      explanation: "Docker Swarm provides clustering and orchestration."
    },
    {
      type: "short-answer",
      question: "Which command is used to view the logs of a running container?",
      correctAnswer: "docker logs",
      explanation: "docker logs shows the logs for a container."
    },
    {
      type: "multiple-choice",
      question: "Which Dockerfile instruction is used to copy files from the host to the image?",
      options: ["COPY", "ADD", "MOVE", "TRANSFER"],
      correctAnswer: "COPY",
      explanation: "COPY copies files from the build context to the image."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between CMD and ENTRYPOINT in a Dockerfile?",
      options: ["CMD provides defaults, ENTRYPOINT is always executed", "No difference", "CMD is for environment variables", "ENTRYPOINT is for ports"],
      correctAnswer: "CMD provides defaults, ENTRYPOINT is always executed",
      explanation: "CMD sets default arguments, ENTRYPOINT sets the main command."
    },
    {
      type: "true-false",
      question: "Docker containers are isolated from the host by default.",
      correctAnswer: true,
      explanation: "Containers are isolated by namespaces and cgroups."
    },
    {
      type: "short-answer",
      question: "Which command is used to start an interactive shell in a running container?",
      correctAnswer: "docker exec -it <container> /bin/bash",
      explanation: "docker exec -it allows you to run a shell in a running container."
    },
    {
      type: "multiple-choice",
      question: "Which Docker command is used to remove an image?",
      options: ["docker rmi", "docker rm", "docker image delete", "docker image remove"],
      correctAnswer: "docker rmi",
      explanation: "docker rmi removes an image from the local registry."
    }
  ],
  "Kubernetes Orchestration": [
    {
      type: "multiple-choice",
      question: "Which Kubernetes object is responsible for ensuring a specified number of pod replicas are running?",
      options: ["Deployment", "Service", "ConfigMap", "Ingress"],
      correctAnswer: "Deployment",
      explanation: "A Deployment manages ReplicaSets to ensure the desired number of pods are running."
    },
    {
      type: "multiple-choice",
      question: "What is the main function of a Kubernetes Service?",
      options: ["Expose pods on a network", "Store secrets", "Manage volumes", "Schedule pods"],
      correctAnswer: "Expose pods on a network",
      explanation: "A Service provides stable networking and load balancing for pods."
    },
    {
      type: "true-false",
      question: "A StatefulSet is used for stateless applications in Kubernetes.",
      correctAnswer: false,
      explanation: "StatefulSets are for stateful applications requiring stable identities."
    },
    {
      type: "short-answer",
      question: "Which command is used to view all pods in all namespaces?",
      correctAnswer: "kubectl get pods --all-namespaces",
      explanation: "This command lists all pods across all namespaces."
    },
    {
      type: "multiple-choice",
      question: "Which Kubernetes object is used to inject configuration data into pods?",
      options: ["ConfigMap", "Secret", "Volume", "ServiceAccount"],
      correctAnswer: "ConfigMap",
      explanation: "ConfigMaps provide configuration data to pods."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a DaemonSet?",
      options: ["Run a pod on every node", "Expose services", "Manage secrets", "Create namespaces"],
      correctAnswer: "Run a pod on every node",
      explanation: "DaemonSets ensure a copy of a pod runs on all (or some) nodes."
    },
    {
      type: "true-false",
      question: "Kubernetes Ingress can be used to manage external HTTP(S) access to services.",
      correctAnswer: true,
      explanation: "Ingress manages external access to services, typically HTTP/HTTPS."
    },
    {
      type: "short-answer",
      question: "Which Kubernetes resource is used to store sensitive information like passwords?",
      correctAnswer: "Secret",
      explanation: "Secrets are used for sensitive data."
    },
    {
      type: "multiple-choice",
      question: "Which component is responsible for scheduling pods onto nodes?",
      options: ["kube-scheduler", "kubelet", "etcd", "kube-proxy"],
      correctAnswer: "kube-scheduler",
      explanation: "kube-scheduler assigns pods to nodes."
    },
    {
      type: "multiple-choice",
      question: "What is the default namespace in Kubernetes?",
      options: ["default", "kube-system", "kube-public", "user"],
      correctAnswer: "default",
      explanation: "The default namespace is used when none is specified."
    },
    {
      type: "true-false",
      question: "A PersistentVolumeClaim (PVC) is used to request storage resources in Kubernetes.",
      correctAnswer: true,
      explanation: "PVCs request storage from PersistentVolumes."
    },
    {
      type: "short-answer",
      question: "Which command is used to scale a deployment to 5 replicas?",
      correctAnswer: "kubectl scale deployment <name> --replicas=5",
      explanation: "This command scales a deployment to 5 pods."
    },
    {
      type: "multiple-choice",
      question: "Which Kubernetes object is used to define network policies?",
      options: ["NetworkPolicy", "Service", "Ingress", "ConfigMap"],
      correctAnswer: "NetworkPolicy",
      explanation: "NetworkPolicy defines rules for network traffic."
    },
    {
      type: "multiple-choice",
      question: "What is the main function of kubelet?",
      options: ["Manage pods on a node", "Schedule pods", "Store cluster state", "Expose services"],
      correctAnswer: "Manage pods on a node",
      explanation: "kubelet ensures containers are running in a pod."
    },
    {
      type: "true-false",
      question: "Kubernetes supports rolling updates for Deployments.",
      correctAnswer: true,
      explanation: "Rolling updates are supported for Deployments."
    },
    {
      type: "short-answer",
      question: "Which resource is used to define a custom resource in Kubernetes?",
      correctAnswer: "CustomResourceDefinition (CRD)",
      explanation: "CRDs allow you to define custom resources."
    },
    {
      type: "multiple-choice",
      question: "Which Kubernetes object is used to expose a service externally using a cloud provider's load balancer?",
      options: ["Service of type LoadBalancer", "Ingress", "NodePort", "ClusterIP"],
      correctAnswer: "Service of type LoadBalancer",
      explanation: "LoadBalancer services provision external load balancers."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of etcd in Kubernetes?",
      options: ["Store cluster state", "Schedule pods", "Manage networking", "Expose services"],
      correctAnswer: "Store cluster state",
      explanation: "etcd is the key-value store for cluster state."
    },
    {
      type: "true-false",
      question: "Kubernetes supports horizontal pod autoscaling.",
      correctAnswer: true,
      explanation: "Horizontal Pod Autoscaler automatically scales the number of pods."
    },
    {
      type: "short-answer",
      question: "Which command is used to apply a configuration file to a cluster?",
      correctAnswer: "kubectl apply -f <file>.yaml",
      explanation: "kubectl apply -f applies a configuration file."
    },
    {
      type: "multiple-choice",
      question: "Which Kubernetes object is used to run a job to completion?",
      options: ["Job", "CronJob", "Deployment", "ReplicaSet"],
      correctAnswer: "Job",
      explanation: "Job runs pods to completion."
    }
  ],
  "Terraform Infrastructure as Code": [
    {
      type: "multiple-choice",
      question: "Which command initializes a new or existing Terraform configuration?",
      options: ["terraform init", "terraform plan", "terraform apply", "terraform validate"],
      correctAnswer: "terraform init",
      explanation: "terraform init initializes the working directory and downloads providers."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of the Terraform state file?",
      options: ["Track resource state", "Store provider plugins", "Manage variables", "Store logs"],
      correctAnswer: "Track resource state",
      explanation: "The state file tracks the current state of resources managed by Terraform."
    },
    {
      type: "true-false",
      question: "Terraform supports both local and remote backends for state storage.",
      correctAnswer: true,
      explanation: "State can be stored locally or remotely (e.g., S3, GCS, Azure Blob)."
    },
    {
      type: "short-answer",
      question: "Which file extension is used for Terraform configuration files?",
      correctAnswer: ".tf",
      explanation: "Terraform configuration files use the .tf extension."
    },
    {
      type: "multiple-choice",
      question: "Which Terraform command shows the execution plan?",
      options: ["terraform plan", "terraform show", "terraform apply", "terraform graph"],
      correctAnswer: "terraform plan",
      explanation: "terraform plan shows what actions Terraform will take."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of Terraform modules?",
      options: ["Reuse configuration", "Store state", "Manage providers", "Store logs"],
      correctAnswer: "Reuse configuration",
      explanation: "Modules allow you to reuse and organize configuration."
    },
    {
      type: "true-false",
      question: "Terraform can manage resources across multiple cloud providers in a single configuration.",
      correctAnswer: true,
      explanation: "Terraform is multi-cloud and can manage resources across providers."
    },
    {
      type: "short-answer",
      question: "Which command is used to destroy all resources managed by Terraform?",
      correctAnswer: "terraform destroy",
      explanation: "terraform destroy removes all managed resources."
    },
    {
      type: "multiple-choice",
      question: "Which block in Terraform is used to define a resource?",
      options: ["resource", "provider", "module", "variable"],
      correctAnswer: "resource",
      explanation: "The resource block defines a resource to be managed."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using remote state locking?",
      options: ["Prevent concurrent modifications", "Faster apply", "Smaller state files", "Better logging"],
      correctAnswer: "Prevent concurrent modifications",
      explanation: "Remote state locking prevents multiple users from modifying state at the same time."
    },
    {
      type: "true-false",
      question: "Terraform variables can be set via environment variables.",
      correctAnswer: true,
      explanation: "TF_VAR_name environment variables can set Terraform variables."
    },
    {
      type: "short-answer",
      question: "Which command is used to validate the syntax of Terraform files?",
      correctAnswer: "terraform validate",
      explanation: "terraform validate checks the syntax and internal consistency."
    },
    {
      type: "multiple-choice",
      question: "Which Terraform feature allows you to preview changes before applying them?",
      options: ["terraform plan", "terraform show", "terraform graph", "terraform import"],
      correctAnswer: "terraform plan",
      explanation: "terraform plan previews changes."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of the provider block in Terraform?",
      options: ["Configure cloud provider credentials", "Define resources", "Store state", "Manage modules"],
      correctAnswer: "Configure cloud provider credentials",
      explanation: "The provider block configures access to cloud providers."
    },
    {
      type: "true-false",
      question: "Terraform supports conditional expressions in configuration files.",
      correctAnswer: true,
      explanation: "You can use conditionals in Terraform configuration."
    },
    {
      type: "short-answer",
      question: "Which command is used to import existing infrastructure into Terraform?",
      correctAnswer: "terraform import",
      explanation: "terraform import brings existing resources under Terraform management."
    },
    {
      type: "multiple-choice",
      question: "Which file is used to define input variables in Terraform?",
      options: ["variables.tf", "main.tf", "outputs.tf", "provider.tf"],
      correctAnswer: "variables.tf",
      explanation: "variables.tf is commonly used for input variables."
    },
    {
      type: "multiple-choice",
      question: "What is the main function of the output block in Terraform?",
      options: ["Display values after apply", "Store state", "Manage providers", "Reuse configuration"],
      correctAnswer: "Display values after apply",
      explanation: "The output block displays values after terraform apply."
    },
    {
      type: "true-false",
      question: "Terraform supports for_each and count for resource creation.",
      correctAnswer: true,
      explanation: "for_each and count allow multiple resource instances."
    },
    {
      type: "short-answer",
      question: "Which command is used to show the current state of resources?",
      correctAnswer: "terraform show",
      explanation: "terraform show displays the current state."
    },
    {
      type: "multiple-choice",
      question: "Which Terraform command is used to upgrade provider plugins?",
      options: ["terraform init -upgrade", "terraform plan", "terraform refresh", "terraform validate"],
      correctAnswer: "terraform init -upgrade",
      explanation: "terraform init -upgrade upgrades provider plugins."
    }
  ],
  "Serverless Architectures": [
    {
      type: "multiple-choice",
      question: "Which of the following is a primary advantage of serverless architectures?",
      options: ["No need to manage servers", "Unlimited compute resources", "No cost for idle time", "Guaranteed zero latency"],
      correctAnswer: "No need to manage servers",
      explanation: "Serverless abstracts away server management, letting developers focus on code."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is NOT considered serverless?",
      options: ["AWS Lambda", "Amazon EC2", "AWS Step Functions", "Amazon S3"],
      correctAnswer: "Amazon EC2",
      explanation: "EC2 requires server management, while the others are serverless."
    },
    {
      type: "multiple-choice",
      question: "What is a cold start in serverless computing?",
      options: ["Initial function invocation delay", "Server overheating", "Billing cycle reset", "Scaling to zero"],
      correctAnswer: "Initial function invocation delay",
      explanation: "A cold start is the latency when a function is invoked after being idle."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a common use case for serverless?",
      options: ["Event-driven APIs", "Long-running batch jobs", "Persistent database hosting", "Operating system virtualization"],
      correctAnswer: "Event-driven APIs",
      explanation: "Serverless is ideal for event-driven, short-lived workloads."
    },
    {
      type: "multiple-choice",
      question: "Which statement about serverless pricing is true?",
      options: ["You pay only for execution time", "You pay a flat monthly fee", "You pay for reserved capacity", "You pay for OS licenses"],
      correctAnswer: "You pay only for execution time",
      explanation: "Serverless pricing is based on actual usage, not reserved resources."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a limitation of serverless architectures?",
      options: ["Execution timeouts", "No scalability", "No event triggers", "No monitoring"],
      correctAnswer: "Execution timeouts",
      explanation: "Serverless functions often have maximum execution time limits."
    },
    {
      type: "multiple-choice",
      question: "Which cloud provider offers Cloud Functions as a serverless compute service?",
      options: ["Google Cloud Platform", "AWS", "Azure", "IBM Cloud"],
      correctAnswer: "Google Cloud Platform",
      explanation: "GCP's serverless compute is called Cloud Functions."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using serverless for microservices?",
      options: ["Independent scaling", "Monolithic deployment", "Manual patching", "Fixed resource allocation"],
      correctAnswer: "Independent scaling",
      explanation: "Each function can scale independently based on demand."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a serverless event source?",
      options: ["HTTP request", "Database change", "Manual server reboot", "File upload"],
      correctAnswer: "Manual server reboot",
      explanation: "Serverless functions are triggered by events, not manual server actions."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a best practice for serverless security?",
      options: ["Principle of least privilege", "Hardcoding secrets", "Disabling logging", "Allowing all network traffic"],
      correctAnswer: "Principle of least privilege",
      explanation: "Always grant the minimum permissions necessary."
    },
    {
      type: "true-false",
      question: "Serverless functions can run indefinitely without timeout limits.",
      correctAnswer: false,
      explanation: "Most serverless platforms enforce maximum execution time limits."
    },
    {
      type: "true-false",
      question: "Serverless architectures are inherently more secure than traditional architectures.",
      correctAnswer: false,
      explanation: "Security depends on implementation; serverless introduces new risks."
    },
    {
      type: "true-false",
      question: "Serverless functions can be triggered by scheduled events.",
      correctAnswer: true,
      explanation: "Scheduled triggers (like cron jobs) are supported by most serverless platforms."
    },
    {
      type: "true-false",
      question: "Vendor lock-in is a potential risk with serverless architectures.",
      correctAnswer: true,
      explanation: "Serverless implementations are often provider-specific, increasing lock-in risk."
    },
    {
      type: "true-false",
      question: "Serverless functions can scale to zero when not in use.",
      correctAnswer: true,
      explanation: "Scaling to zero is a key feature of serverless platforms."
    },
    {
      type: "short-answer",
      question: "Name one popular open-source serverless framework.",
      correctAnswer: "Serverless Framework",
      explanation: "The Serverless Framework is widely used for deploying serverless applications."
    },
    {
      type: "short-answer",
      question: "What is the maximum execution time for an AWS Lambda function (as of 2024)?",
      correctAnswer: "15 minutes",
      explanation: "AWS Lambda functions can run for up to 15 minutes per invocation."
    },
    {
      type: "short-answer",
      question: "Which AWS service can be used to orchestrate serverless workflows?",
      correctAnswer: "AWS Step Functions",
      explanation: "Step Functions coordinate multiple AWS Lambda functions and services."
    },
    {
      type: "short-answer",
      question: "What is the main challenge of monitoring serverless applications?",
      correctAnswer: "Distributed tracing",
      explanation: "Serverless apps are highly distributed, making tracing and monitoring more complex."
    },
    {
      type: "short-answer",
      question: "Which Azure service provides serverless compute?",
      correctAnswer: "Azure Functions",
      explanation: "Azure Functions is the serverless compute offering in Azure."
    },
    {
      type: "short-answer",
      question: "What is the term for the practice of breaking applications into small, event-driven functions?",
      correctAnswer: "Function as a Service (FaaS)",
      explanation: "FaaS is the core concept behind serverless architectures."
    }
  ],
  "CI/CD with GitHub Actions": [
    {
      type: "multiple-choice",
      question: "What is the main purpose of GitHub Actions?",
      options: ["Automate workflows", "Host static sites", "Manage issues", "Store secrets"],
      correctAnswer: "Automate workflows",
      explanation: "GitHub Actions is used to automate CI/CD and other workflows."
    },
    {
      type: "multiple-choice",
      question: "Which file format is used to define GitHub Actions workflows?",
      options: ["YAML", "JSON", "XML", "TOML"],
      correctAnswer: "YAML",
      explanation: "Workflows are defined in YAML files."
    },
    {
      type: "multiple-choice",
      question: "Which event can trigger a GitHub Actions workflow?",
      options: ["push", "pull_request", "schedule", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "Workflows can be triggered by many events, including push, pull_request, and schedule."
    },
    {
      type: "multiple-choice",
      question: "What is a 'job' in GitHub Actions?",
      options: ["A set of steps executed on the same runner", "A single shell command", "A repository secret", "A workflow file"],
      correctAnswer: "A set of steps executed on the same runner",
      explanation: "A job is a collection of steps that run sequentially on the same runner."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid GitHub Actions runner?",
      options: ["ubuntu-latest", "windows-latest", "macos-latest", "android-latest"],
      correctAnswer: "android-latest",
      explanation: "There is no 'android-latest' runner; the others are valid."
    },
    {
      type: "multiple-choice",
      question: "How can you share data between jobs in a workflow?",
      options: ["Artifacts", "Environment variables", "Secrets", "Labels"],
      correctAnswer: "Artifacts",
      explanation: "Artifacts are used to share data between jobs."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define environment variables in a workflow?",
      options: ["env", "environment", "vars", "set"],
      correctAnswer: "env",
      explanation: "The 'env' keyword is used to define environment variables."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum number of jobs that can run concurrently in a free GitHub Actions plan (as of 2024)?",
      options: ["20", "60", "256", "Unlimited"],
      correctAnswer: "20",
      explanation: "The free plan allows up to 20 concurrent jobs."
    },
    {
      type: "multiple-choice",
      question: "Which action is used to check out your repository code in a workflow?",
      options: ["actions/checkout", "actions/upload-artifact", "actions/setup-node", "actions/cache"],
      correctAnswer: "actions/checkout",
      explanation: "actions/checkout is used to clone your repo in the workflow."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a best practice for storing secrets in GitHub Actions?",
      options: ["Use GitHub Secrets", "Hardcode in workflow", "Store in plaintext", "Commit to repo"],
      correctAnswer: "Use GitHub Secrets",
      explanation: "Secrets should be stored securely using GitHub Secrets."
    },
    {
      type: "true-false",
      question: "GitHub Actions can only be used for CI, not CD.",
      correctAnswer: false,
      explanation: "GitHub Actions supports both CI and CD workflows."
    },
    {
      type: "true-false",
      question: "You can trigger a workflow manually in GitHub Actions.",
      correctAnswer: true,
      explanation: "Workflows can be triggered manually using the 'workflow_dispatch' event."
    },
    {
      type: "true-false",
      question: "Workflow logs are only available for 24 hours.",
      correctAnswer: false,
      explanation: "Logs are retained for up to 90 days for public repositories."
    },
    {
      type: "true-false",
      question: "You can use matrix builds to test across multiple environments in GitHub Actions.",
      correctAnswer: true,
      explanation: "Matrix builds allow you to run jobs in parallel across different environments."
    },
    {
      type: "true-false",
      question: "GitHub Actions supports caching dependencies between workflow runs.",
      correctAnswer: true,
      explanation: "actions/cache can be used to cache dependencies."
    },
    {
      type: "short-answer",
      question: "What is the name of the YAML file where you define a workflow?",
      correctAnswer: "workflow.yml",
      explanation: "Workflows are defined in YAML files, typically named workflow.yml."
    },
    {
      type: "short-answer",
      question: "Which keyword is used to specify the event that triggers a workflow?",
      correctAnswer: "on",
      explanation: "The 'on' keyword specifies the event that triggers the workflow."
    },
    {
      type: "short-answer",
      question: "Name one way to reuse workflow logic in multiple workflows.",
      correctAnswer: "Reusable workflows",
      explanation: "Reusable workflows allow you to share logic across workflows."
    },
    {
      type: "short-answer",
      question: "What is the maximum size of an artifact in GitHub Actions (as of 2024)?",
      correctAnswer: "2 GB",
      explanation: "Artifacts can be up to 2 GB in size."
    },
    {
      type: "short-answer",
      question: "Which GitHub Actions feature allows you to run jobs on self-hosted runners?",
      correctAnswer: "Self-hosted runners",
      explanation: "You can configure self-hosted runners for custom environments."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using actions/cache in a workflow?",
      correctAnswer: "Speed up builds",
      explanation: "Caching dependencies reduces build times."
    }
  ],
  "AWS Lambda Deep Dive": [
    {
      type: "multiple-choice",
      question: "What is the maximum memory allocation for an AWS Lambda function (as of 2024)?",
      options: ["10 GB", "3 GB", "15 GB", "5 GB"],
      correctAnswer: "10 GB",
      explanation: "Lambda functions can be allocated up to 10 GB of memory."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is commonly used to trigger Lambda functions on S3 events?",
      options: ["S3 Event Notifications", "SNS", "SQS", "CloudWatch"],
      correctAnswer: "S3 Event Notifications",
      explanation: "S3 can trigger Lambda functions via event notifications."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum execution timeout for an AWS Lambda function?",
      options: ["1 minute", "5 minutes", "15 minutes", "60 minutes"],
      correctAnswer: "15 minutes",
      explanation: "The maximum execution timeout for Lambda is 15 minutes."
    },
    {
      type: "multiple-choice",
      question: "Which language is NOT natively supported by AWS Lambda?",
      options: ["Python", "Go", "Rust", "JavaScript"],
      correctAnswer: "Rust",
      explanation: "Rust is not natively supported; others are."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service is used to manage Lambda function versions and aliases?",
      options: ["AWS Lambda Console", "AWS CodeDeploy", "AWS CloudFormation", "AWS SAM"],
      correctAnswer: "AWS Lambda Console",
      explanation: "Versions and aliases are managed in the Lambda Console."
    },
    {
      type: "multiple-choice",
      question: "What is the default Lambda invocation type?",
      options: ["Event", "RequestResponse", "DryRun", "Async"],
      correctAnswer: "RequestResponse",
      explanation: "RequestResponse is the default invocation type."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service can be used to orchestrate multiple Lambda functions?",
      options: ["Step Functions", "SNS", "SQS", "CloudWatch"],
      correctAnswer: "Step Functions",
      explanation: "Step Functions orchestrate multiple Lambda functions."
    },
    {
      type: "multiple-choice",
      question: "What is the maximum deployment package size for a Lambda function (zipped, direct upload)?",
      options: ["50 MB", "250 MB", "100 MB", "10 MB"],
      correctAnswer: "50 MB",
      explanation: "The zipped deployment package size limit is 50 MB."
    },
    {
      type: "multiple-choice",
      question: "Which Lambda runtime is deprecated as of 2024?",
      options: ["Node.js 12.x", "Python 3.9", "Java 11", "Go 1.x"],
      correctAnswer: "Node.js 12.x",
      explanation: "Node.js 12.x is deprecated."
    },
    {
      type: "multiple-choice",
      question: "Which AWS service can be used to monitor Lambda logs?",
      options: ["CloudWatch Logs", "S3", "SNS", "DynamoDB"],
      correctAnswer: "CloudWatch Logs",
      explanation: "CloudWatch Logs is used for Lambda log monitoring."
    },
    {
      type: "true-false",
      question: "Lambda functions can be triggered by API Gateway events.",
      correctAnswer: true,
      explanation: "API Gateway can trigger Lambda functions."
    },
    {
      type: "true-false",
      question: "Lambda functions can access resources in a VPC.",
      correctAnswer: true,
      explanation: "Lambda can be configured to access VPC resources."
    },
    {
      type: "true-false",
      question: "Lambda supports environment variables.",
      correctAnswer: true,
      explanation: "Environment variables are supported in Lambda."
    },
    {
      type: "true-false",
      question: "Lambda functions can run for up to 1 hour.",
      correctAnswer: false,
      explanation: "The maximum is 15 minutes."
    },
    {
      type: "true-false",
      question: "Lambda@Edge allows you to run functions at AWS edge locations.",
      correctAnswer: true,
      explanation: "Lambda@Edge runs code at AWS edge locations."
    },
    {
      type: "short-answer",
      question: "What is the default memory allocation for a Lambda function?",
      correctAnswer: "128 MB",
      explanation: "128 MB is the default memory allocation."
    },
    {
      type: "short-answer",
      question: "Which AWS CLI command is used to update a Lambda function's code?",
      correctAnswer: "aws lambda update-function-code",
      explanation: "This command updates Lambda function code."
    },
    {
      type: "short-answer",
      question: "What is the maximum unzipped deployment package size for Lambda (including layers)?",
      correctAnswer: "250 MB",
      explanation: "The unzipped size limit is 250 MB."
    },
    {
      type: "short-answer",
      question: "Which AWS service can be used to automate Lambda deployments?",
      correctAnswer: "AWS CodeDeploy",
      explanation: "CodeDeploy can automate Lambda deployments."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Lambda layers?",
      correctAnswer: "Share code and dependencies across functions",
      explanation: "Layers allow sharing code and dependencies."
    },
    {
      type: "short-answer",
      question: "Which AWS service can trigger Lambda functions based on DynamoDB stream events?",
      correctAnswer: "DynamoDB Streams",
      explanation: "DynamoDB Streams can trigger Lambda functions."
    }
  ],
  "Swift for iOS": [
    {
      type: "multiple-choice",
      question: "Which keyword is used to declare a constant in Swift?",
      options: ["let", "var", "const", "static"],
      correctAnswer: "let",
      explanation: "'let' is used to declare constants in Swift."
    },
    {
      type: "multiple-choice",
      question: "What is the main difference between a class and a struct in Swift?",
      options: ["Classes are reference types, structs are value types", "Structs can inherit, classes cannot", "Classes are immutable", "Structs support ARC"],
      correctAnswer: "Classes are reference types, structs are value types",
      explanation: "Classes are reference types, structs are value types."
    },
    {
      type: "multiple-choice",
      question: "Which protocol is used for data persistence in Swift?",
      options: ["Codable", "Persistable", "Archivable", "Serializable"],
      correctAnswer: "Codable",
      explanation: "Codable is used for encoding and decoding data."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of the 'guard' statement in Swift?",
      options: ["Early exit on failure", "Looping", "Type casting", "Memory management"],
      correctAnswer: "Early exit on failure",
      explanation: "'guard' is used for early exit if a condition is not met."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a Swift collection type?",
      options: ["Array", "Set", "Dictionary", "Tuple"],
      correctAnswer: "Tuple",
      explanation: "Tuple is not a collection type in Swift."
    },
    {
      type: "true-false",
      question: "Swift supports optional chaining to safely access properties on optionals.",
      correctAnswer: true,
      explanation: "Optional chaining allows safe access to properties and methods on optionals."
    },
    {
      type: "true-false",
      question: "A Swift enum can have associated values.",
      correctAnswer: true,
      explanation: "Enums in Swift can store associated values."
    },
    {
      type: "true-false",
      question: "Swift uses garbage collection for memory management.",
      correctAnswer: false,
      explanation: "Swift uses Automatic Reference Counting (ARC), not garbage collection."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'defer' statement in Swift?",
      correctAnswer: "To execute code just before leaving the current scope",
      explanation: "'defer' schedules code to run at the end of the current scope."
    },
    {
      type: "short-answer",
      question: "Which method is called when a view controller's view is loaded into memory?",
      correctAnswer: "viewDidLoad",
      explanation: "'viewDidLoad' is called after the view is loaded."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a protocol in Swift?",
      options: ["protocol", "interface", "delegate", "contract"],
      correctAnswer: "protocol",
      explanation: "'protocol' is the keyword for defining protocols."
    },
    {
      type: "multiple-choice",
      question: "Which property wrapper is used for state management in SwiftUI?",
      options: ["@State", "@Binding", "@ObservedObject", "@EnvironmentObject"],
      correctAnswer: "@State",
      explanation: "@State is used for local state management in SwiftUI."
    },
    {
      type: "multiple-choice",
      question: "What is the default access level for Swift entities?",
      options: ["internal", "public", "private", "fileprivate"],
      correctAnswer: "internal",
      explanation: "The default access level is internal."
    },
    {
      type: "true-false",
      question: "Swift supports operator overloading.",
      correctAnswer: true,
      explanation: "Operators can be overloaded in Swift."
    },
    {
      type: "true-false",
      question: "A struct in Swift can inherit from another struct.",
      correctAnswer: false,
      explanation: "Structs cannot inherit from other structs."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'lazy' keyword in Swift?",
      correctAnswer: "To delay initialization of a property until it is first used",
      explanation: "'lazy' properties are initialized only when accessed."
    },
    {
      type: "short-answer",
      question: "Which function is used to print output to the console in Swift?",
      correctAnswer: "print()",
      explanation: "'print()' outputs text to the console."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is used to handle errors in Swift?",
      options: ["try-catch", "do-catch", "throw-catch", "error-catch"],
      correctAnswer: "do-catch",
      explanation: "'do-catch' is used for error handling in Swift."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to add a subview to a UIView in UIKit?",
      options: ["addSubview", "appendChild", "insertSubview", "addChildView"],
      correctAnswer: "addSubview",
      explanation: "'addSubview' adds a subview to a UIView."
    },
    {
      type: "multiple-choice",
      question: "Which closure capture list keyword is used to avoid retain cycles?",
      options: ["weak", "strong", "unowned", "optional"],
      correctAnswer: "weak",
      explanation: "'weak' is used in closure capture lists to avoid retain cycles."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'AppDelegate' in an iOS app?",
      correctAnswer: "To handle application lifecycle events",
      explanation: "AppDelegate manages app lifecycle events."
    }
  ],
  "Kotlin for Android": [
    {
      type: "multiple-choice",
      question: "Which symbol is used to declare a nullable type in Kotlin?",
      options: ["?", "!", "*", "&"],
      correctAnswer: "?",
      explanation: "A '?' after the type makes it nullable."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to launch a coroutine in Kotlin?",
      options: ["launch", "start", "run", "begin"],
      correctAnswer: "launch",
      explanation: "'launch' is used to start a coroutine."
    },
    {
      type: "multiple-choice",
      question: "What is the default visibility modifier in Kotlin?",
      options: ["public", "private", "internal", "protected"],
      correctAnswer: "public",
      explanation: "The default visibility is public."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define an immutable variable in Kotlin?",
      options: ["val", "var", "const", "let"],
      correctAnswer: "val",
      explanation: "'val' is used for immutable variables."
    },
    {
      type: "multiple-choice",
      question: "Which class is the root of the Kotlin class hierarchy?",
      options: ["Any", "Object", "Base", "Root"],
      correctAnswer: "Any",
      explanation: "'Any' is the root of the Kotlin class hierarchy."
    },
    {
      type: "true-false",
      question: "Kotlin supports extension functions.",
      correctAnswer: true,
      explanation: "Kotlin allows you to add functions to existing classes."
    },
    {
      type: "true-false",
      question: "Kotlin coroutines are used for asynchronous programming.",
      correctAnswer: true,
      explanation: "Coroutines simplify async programming."
    },
    {
      type: "true-false",
      question: "Kotlin does not support operator overloading.",
      correctAnswer: false,
      explanation: "Kotlin supports operator overloading."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the 'data' keyword in Kotlin?",
      correctAnswer: "To create data classes with useful methods automatically generated",
      explanation: "'data' classes have equals, hashCode, toString, etc."
    },
    {
      type: "short-answer",
      question: "Which function is used to print output in Kotlin?",
      correctAnswer: "println()",
      explanation: "'println()' prints output to the console."
    },
    {
      type: "multiple-choice",
      question: "Which collection type in Kotlin is immutable by default?",
      options: ["List", "MutableList", "ArrayList", "Set"],
      correctAnswer: "List",
      explanation: "'List' is immutable by default."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to implement an interface in Kotlin?",
      options: ["implements", "extends", "by", "override"],
      correctAnswer: "override",
      explanation: "'override' is used to implement interface members."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to create a new thread in Kotlin?",
      options: ["thread", "startThread", "launchThread", "newThread"],
      correctAnswer: "thread",
      explanation: "'thread' creates a new thread."
    },
    {
      type: "true-false",
      question: "Kotlin supports default arguments in functions.",
      correctAnswer: true,
      explanation: "Functions can have default arguments."
    },
    {
      type: "true-false",
      question: "Kotlin does not support null safety.",
      correctAnswer: false,
      explanation: "Kotlin is designed with null safety."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'object' keyword in Kotlin?",
      correctAnswer: "To declare a singleton or anonymous object",
      explanation: "'object' is used for singletons and anonymous objects."
    },
    {
      type: "short-answer",
      question: "Which annotation is used for Android activities in Kotlin?",
      correctAnswer: "@Activity",
      explanation: "@Activity is used to annotate Android activities."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to filter a list in Kotlin?",
      options: ["filter", "select", "where", "findAll"],
      correctAnswer: "filter",
      explanation: "'filter' is used to filter collections."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a companion object in Kotlin?",
      options: ["companion", "static", "object", "class"],
      correctAnswer: "companion",
      explanation: "'companion object' is used for static members."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to map a list in Kotlin?",
      options: ["map", "transform", "convert", "apply"],
      correctAnswer: "map",
      explanation: "'map' transforms each element in a collection."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'lateinit' modifier in Kotlin?",
      correctAnswer: "To declare a non-null variable that will be initialized later",
      explanation: "'lateinit' is used for late initialization."
    }
  ],
  "React Native": [
    {
      type: "multiple-choice",
      question: "Which command initializes a new React Native project?",
      options: ["npx react-native init", "npm create react-native-app", "expo start", "react-native new"],
      correctAnswer: "npx react-native init",
      explanation: "'npx react-native init' initializes a new React Native project."
    },
    {
      type: "multiple-choice",
      question: "Which component is used to render scrollable content in React Native?",
      options: ["ScrollView", "FlatList", "SectionList", "View"],
      correctAnswer: "ScrollView",
      explanation: "ScrollView renders scrollable content."
    },
    {
      type: "multiple-choice",
      question: "Which API is used for navigation in React Native apps?",
      options: ["React Navigation", "Navigator", "Router", "History"],
      correctAnswer: "React Navigation",
      explanation: "React Navigation is a popular navigation library."
    },
    {
      type: "multiple-choice",
      question: "Which command runs a React Native app on Android?",
      options: ["npx react-native run-android", "npm start android", "expo android", "react-native android"],
      correctAnswer: "npx react-native run-android",
      explanation: "'npx react-native run-android' runs the app on Android."
    },
    {
      type: "multiple-choice",
      question: "Which hook is used for state management in React Native?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useState",
      explanation: "useState is used for state management."
    },
    {
      type: "true-false",
      question: "React Native uses native components under the hood.",
      correctAnswer: true,
      explanation: "React Native bridges to native components."
    },
    {
      type: "true-false",
      question: "Expo is a framework for building React Native apps.",
      correctAnswer: true,
      explanation: "Expo is a framework and platform for React Native."
    },
    {
      type: "true-false",
      question: "React Native apps cannot access device APIs.",
      correctAnswer: false,
      explanation: "React Native can access device APIs via native modules."
    },
    {
      type: "short-answer",
      question: "Which file contains the entry point for a React Native app?",
      correctAnswer: "index.js",
      explanation: "index.js is the entry point."
    },
    {
      type: "short-answer",
      question: "Which command is used to start the Metro bundler?",
      correctAnswer: "npx react-native start",
      explanation: "'npx react-native start' starts the Metro bundler."
    },
    {
      type: "multiple-choice",
      question: "Which component is used for efficient list rendering in React Native?",
      options: ["FlatList", "ScrollView", "ListView", "SectionList"],
      correctAnswer: "FlatList",
      explanation: "FlatList is optimized for large lists."
    },
    {
      type: "multiple-choice",
      question: "Which prop is used to style a component in React Native?",
      options: ["style", "className", "css", "styles"],
      correctAnswer: "style",
      explanation: "The 'style' prop is used for styling."
    },
    {
      type: "multiple-choice",
      question: "Which lifecycle method is available in React Native class components?",
      options: ["componentDidMount", "useEffect", "onMount", "init"],
      correctAnswer: "componentDidMount",
      explanation: "componentDidMount is a lifecycle method."
    },
    {
      type: "true-false",
      question: "React Native supports hot reloading.",
      correctAnswer: true,
      explanation: "Hot reloading is supported in React Native."
    },
    {
      type: "true-false",
      question: "React Native apps can be published to both iOS and Android app stores.",
      correctAnswer: true,
      explanation: "React Native supports cross-platform publishing."
    },
    {
      type: "short-answer",
      question: "Which command is used to run a React Native app on iOS?",
      correctAnswer: "npx react-native run-ios",
      explanation: "'npx react-native run-ios' runs the app on iOS."
    },
    {
      type: "short-answer",
      question: "Which package is commonly used for HTTP requests in React Native?",
      correctAnswer: "axios",
      explanation: "axios is a popular HTTP client."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for debugging React Native apps?",
      options: ["React Native Debugger", "Chrome DevTools", "Redux DevTools", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All listed tools can be used for debugging."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to install dependencies in a React Native project?",
      options: ["npm install", "yarn install", "npx install", "Both npm and yarn"],
      correctAnswer: "Both npm and yarn",
      explanation: "Both npm and yarn can be used."
    },
    {
      type: "multiple-choice",
      question: "Which API is used for animations in React Native?",
      options: ["Animated", "Motion", "Transition", "Animate"],
      correctAnswer: "Animated",
      explanation: "Animated API is used for animations."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using React Native?",
      correctAnswer: "Cross-platform mobile app development",
      explanation: "React Native enables cross-platform development."
    }
  ],
  "Flutter & Dart": [
    {
      type: "multiple-choice",
      question: "Which widget is used for layout composition in Flutter?",
      options: ["Container", "Column", "Row", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All listed widgets are used for layout composition."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of the 'pubspec.yaml' file in a Flutter project?",
      options: ["Dependency management", "UI layout", "Routing", "Testing"],
      correctAnswer: "Dependency management",
      explanation: "pubspec.yaml manages dependencies and project metadata."
    },
    {
      type: "multiple-choice",
      question: "Which method is called to rebuild a widget in Flutter?",
      options: ["setState", "rebuild", "refresh", "update"],
      correctAnswer: "setState",
      explanation: "setState triggers a rebuild of the widget."
    },
    {
      type: "multiple-choice",
      question: "Which Dart keyword is used to define an asynchronous function?",
      options: ["async", "await", "future", "defer"],
      correctAnswer: "async",
      explanation: "'async' marks a function as asynchronous."
    },
    {
      type: "multiple-choice",
      question: "Which widget is used for user input in Flutter?",
      options: ["TextField", "Input", "Form", "Entry"],
      correctAnswer: "TextField",
      explanation: "TextField is used for user input."
    },
    {
      type: "true-false",
      question: "Flutter uses a reactive programming model.",
      correctAnswer: true,
      explanation: "Flutter's UI updates reactively to state changes."
    },
    {
      type: "true-false",
      question: "Dart is a statically typed language.",
      correctAnswer: true,
      explanation: "Dart is statically typed."
    },
    {
      type: "true-false",
      question: "Flutter apps can only be built for Android and iOS.",
      correctAnswer: false,
      explanation: "Flutter supports web, desktop, and embedded platforms too."
    },
    {
      type: "short-answer",
      question: "What is the entry point function for a Flutter app?",
      correctAnswer: "main()",
      explanation: "main() is the entry point."
    },
    {
      type: "short-answer",
      question: "Which widget is used to display a list of items in Flutter?",
      correctAnswer: "ListView",
      explanation: "ListView displays scrollable lists."
    },
    {
      type: "multiple-choice",
      question: "Which package is commonly used for state management in Flutter?",
      options: ["provider", "redux", "bloc", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All listed packages are used for state management."
    },
    {
      type: "multiple-choice",
      question: "Which widget is used to create a navigation drawer in Flutter?",
      options: ["Drawer", "Sidebar", "Panel", "Menu"],
      correctAnswer: "Drawer",
      explanation: "Drawer is used for navigation drawers."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to navigate to a new screen in Flutter?",
      options: ["Navigator.push", "Route.go", "Screen.open", "Page.navigate"],
      correctAnswer: "Navigator.push",
      explanation: "Navigator.push is used for navigation."
    },
    {
      type: "true-false",
      question: "Hot reload is a feature in Flutter for rapid development.",
      correctAnswer: true,
      explanation: "Hot reload allows quick UI updates."
    },
    {
      type: "true-false",
      question: "Dart supports both JIT and AOT compilation.",
      correctAnswer: true,
      explanation: "Dart supports Just-In-Time and Ahead-Of-Time compilation."
    },
    {
      type: "short-answer",
      question: "Which widget is used to display images in Flutter?",
      correctAnswer: "Image",
      explanation: "Image widget displays images."
    },
    {
      type: "short-answer",
      question: "Which command is used to create a new Flutter project?",
      correctAnswer: "flutter create",
      explanation: "'flutter create' initializes a new project."
    },
    {
      type: "multiple-choice",
      question: "Which widget is used for tab navigation in Flutter?",
      options: ["TabBar", "Tabs", "NavigationBar", "TabView"],
      correctAnswer: "TabBar",
      explanation: "TabBar is used for tab navigation."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to run a Flutter app?",
      options: ["runApp", "startApp", "mainApp", "launchApp"],
      correctAnswer: "runApp",
      explanation: "runApp() launches the app."
    },
    {
      type: "multiple-choice",
      question: "Which widget is used for layout constraints in Flutter?",
      options: ["ConstrainedBox", "LimitedBox", "SizedBox", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All listed widgets are used for layout constraints."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Flutter?",
      correctAnswer: "Cross-platform development with a single codebase",
      explanation: "Flutter enables cross-platform development."
    }
  ],
  "Mobile UI/UX Design": [
    {
      type: "multiple-choice",
      question: "Which principle emphasizes user control and freedom in UI design?",
      options: ["Consistency", "User control", "Aesthetics", "Error prevention"],
      correctAnswer: "User control",
      explanation: "User control and freedom is a key usability principle."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of wireframing in UI/UX design?",
      options: ["Visualizing layout", "Testing code", "Writing documentation", "Optimizing performance"],
      correctAnswer: "Visualizing layout",
      explanation: "Wireframes help visualize layout and structure."
    },
    {
      type: "multiple-choice",
      question: "Which color model is most commonly used in digital UI design?",
      options: ["RGB", "CMYK", "HSV", "Pantone"],
      correctAnswer: "RGB",
      explanation: "RGB is used for digital screens."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a mobile design pattern?",
      options: ["Hamburger menu", "Bottom navigation", "Accordion", "Command line"],
      correctAnswer: "Command line",
      explanation: "Command line is not a mobile design pattern."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of responsive design?",
      options: ["Works on all devices", "Faster loading", "Better SEO", "More colors"],
      correctAnswer: "Works on all devices",
      explanation: "Responsive design adapts to different screen sizes."
    },
    {
      type: "true-false",
      question: "Touch targets should be at least 48x48dp for accessibility.",
      correctAnswer: true,
      explanation: "48x48dp is a recommended minimum for touch targets."
    },
    {
      type: "true-false",
      question: "Dark mode is a popular trend in mobile UI design.",
      correctAnswer: true,
      explanation: "Dark mode is widely adopted."
    },
    {
      type: "true-false",
      question: "Skeuomorphic design is currently the dominant trend in mobile UI.",
      correctAnswer: false,
      explanation: "Flat and material design are more common now."
    },
    {
      type: "short-answer",
      question: "What is the main goal of usability testing?",
      correctAnswer: "To identify and fix usability issues",
      explanation: "Usability testing finds and fixes problems."
    },
    {
      type: "short-answer",
      question: "Which tool is commonly used for prototyping UI designs?",
      correctAnswer: "Figma",
      explanation: "Figma is a popular prototyping tool."
    },
    {
      type: "multiple-choice",
      question: "Which guideline is important for color contrast in UI?",
      options: ["WCAG", "HTML5", "CSS3", "ISO"],
      correctAnswer: "WCAG",
      explanation: "WCAG provides color contrast guidelines."
    },
    {
      type: "multiple-choice",
      question: "Which layout is best for one-handed mobile use?",
      options: ["Bottom navigation", "Top navigation", "Side menu", "Grid layout"],
      correctAnswer: "Bottom navigation",
      explanation: "Bottom navigation is easier for one-handed use."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of onboarding screens?",
      options: ["Guide new users", "Show ads", "Collect data", "Test performance"],
      correctAnswer: "Guide new users",
      explanation: "Onboarding screens help new users get started."
    },
    {
      type: "true-false",
      question: "Microinteractions can improve user engagement.",
      correctAnswer: true,
      explanation: "Microinteractions enhance engagement."
    },
    {
      type: "true-false",
      question: "Consistency is not important in UI design.",
      correctAnswer: false,
      explanation: "Consistency is crucial for usability."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using design systems?",
      correctAnswer: "Consistency and efficiency in design",
      explanation: "Design systems ensure consistency and speed."
    },
    {
      type: "short-answer",
      question: "Which principle focuses on reducing cognitive load?",
      correctAnswer: "Simplicity",
      explanation: "Simplicity reduces cognitive load."
    },
    {
      type: "multiple-choice",
      question: "Which gesture is commonly used for refreshing content?",
      options: ["Pull to refresh", "Double tap", "Pinch", "Swipe left"],
      correctAnswer: "Pull to refresh",
      explanation: "Pull to refresh is a common gesture."
    },
    {
      type: "multiple-choice",
      question: "Which element improves accessibility for visually impaired users?",
      options: ["Alt text", "Colorful icons", "Animations", "Gradients"],
      correctAnswer: "Alt text",
      explanation: "Alt text helps screen readers."
    },
    {
      type: "multiple-choice",
      question: "Which metric measures how quickly a user can complete a task?",
      options: ["Time on task", "Bounce rate", "Retention", "Conversion"],
      correctAnswer: "Time on task",
      explanation: "Time on task measures task efficiency."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of a persona in UX design?",
      correctAnswer: "To represent a typical user and guide design decisions",
      explanation: "Personas help designers focus on user needs."
    }
  ],
  "Ionic Framework Crash Course": [
    {
      type: "multiple-choice",
      question: "Which language is primarily used to build Ionic apps?",
      options: ["JavaScript", "Dart", "Swift", "Kotlin"],
      correctAnswer: "JavaScript",
      explanation: "Ionic is built with JavaScript and web technologies."
    },
    {
      type: "multiple-choice",
      question: "Which UI library is commonly used with Ionic?",
      options: ["Ionic UI", "Material UI", "Bootstrap", "Ant Design"],
      correctAnswer: "Ionic UI",
      explanation: "Ionic UI is the default UI library."
    },
    {
      type: "multiple-choice",
      question: "Which command creates a new Ionic project?",
      options: ["ionic start", "ionic new", "ionic create", "ionic init"],
      correctAnswer: "ionic start",
      explanation: "'ionic start' initializes a new project."
    },
    {
      type: "multiple-choice",
      question: "Which framework is NOT officially supported by Ionic?",
      options: ["React", "Vue", "Angular", "Ember"],
      correctAnswer: "Ember",
      explanation: "Ionic does not officially support Ember."
    },
    {
      type: "multiple-choice",
      question: "Which component is used for navigation in Ionic?",
      options: ["ion-router", "ion-nav", "ion-navigation", "ion-link"],
      correctAnswer: "ion-router",
      explanation: "ion-router handles navigation."
    },
    {
      type: "true-false",
      question: "Ionic apps can be deployed as Progressive Web Apps (PWAs).",
      correctAnswer: true,
      explanation: "Ionic supports PWAs."
    },
    {
      type: "true-false",
      question: "Ionic CLI is required for building and running Ionic apps.",
      correctAnswer: true,
      explanation: "Ionic CLI is essential for development."
    },
    {
      type: "true-false",
      question: "Ionic apps cannot access native device features.",
      correctAnswer: false,
      explanation: "Ionic can access native features via plugins."
    },
    {
      type: "short-answer",
      question: "Which plugin is used for accessing the camera in Ionic?",
      correctAnswer: "@ionic-native/camera",
      explanation: "@ionic-native/camera provides camera access."
    },
    {
      type: "short-answer",
      question: "Which command is used to run an Ionic app in the browser?",
      correctAnswer: "ionic serve",
      explanation: "'ionic serve' runs the app in the browser."
    },
    {
      type: "multiple-choice",
      question: "Which CSS technology is used by default in Ionic?",
      options: ["CSS Variables", "SASS", "LESS", "Stylus"],
      correctAnswer: "CSS Variables",
      explanation: "Ionic uses CSS Variables for theming."
    },
    {
      type: "multiple-choice",
      question: "Which command adds a platform to an Ionic project?",
      options: ["ionic platform add", "ionic add platform", "ionic cordova platform add", "ionic cordova add platform"],
      correctAnswer: "ionic cordova platform add",
      explanation: "'ionic cordova platform add' adds a platform."
    },
    {
      type: "multiple-choice",
      question: "Which lifecycle event is triggered when a page is about to enter and become active?",
      options: ["ionViewWillEnter", "ionViewDidEnter", "ionPageWillEnter", "ionPageDidEnter"],
      correctAnswer: "ionViewWillEnter",
      explanation: "ionViewWillEnter is triggered before the page becomes active."
    },
    {
      type: "true-false",
      question: "Ionic supports live reload during development.",
      correctAnswer: true,
      explanation: "Live reload is supported in Ionic."
    },
    {
      type: "true-false",
      question: "Ionic apps can be built with Capacitor or Cordova.",
      correctAnswer: true,
      explanation: "Both Capacitor and Cordova are supported."
    },
    {
      type: "short-answer",
      question: "Which command is used to build an Ionic app for production?",
      correctAnswer: "ionic build --prod",
      explanation: "'ionic build --prod' builds for production."
    },
    {
      type: "short-answer",
      question: "Which Ionic component is used for creating tabs?",
      correctAnswer: "ion-tabs",
      explanation: "ion-tabs is used for tab navigation."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to add a native plugin in Ionic?",
      options: ["ionic cordova plugin add", "ionic plugin add", "ionic add plugin", "ionic native add"],
      correctAnswer: "ionic cordova plugin add",
      explanation: "'ionic cordova plugin add' adds a native plugin."
    },
    {
      type: "multiple-choice",
      question: "Which Ionic component is used for displaying alerts?",
      options: ["ion-alert", "ion-popup", "ion-dialog", "ion-message"],
      correctAnswer: "ion-alert",
      explanation: "ion-alert displays alert dialogs."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to emulate an Ionic app?",
      options: ["ionic cordova emulate", "ionic emulate", "ionic run emulate", "ionic cordova run emulate"],
      correctAnswer: "ionic cordova emulate",
      explanation: "'ionic cordova emulate' runs the app in an emulator."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Ionic?",
      correctAnswer: "Cross-platform mobile app development with web technologies",
      explanation: "Ionic enables cross-platform development using web tech."
    }
  ],
  "C++ Programming": [
    {
      type: "multiple-choice",
      question: "Which C++ feature allows a function to have different behaviors based on argument types?",
      options: ["Function overloading", "Operator overloading", "Templates", "Inheritance"],
      correctAnswer: "Function overloading",
      explanation: "Function overloading allows multiple functions with the same name but different parameters."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a virtual function in C++?",
      options: ["Enable polymorphism", "Memory management", "Operator overloading", "Exception handling"],
      correctAnswer: "Enable polymorphism",
      explanation: "Virtual functions enable runtime polymorphism."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to prevent a class from being inherited?",
      options: ["final", "sealed", "static", "const"],
      correctAnswer: "final",
      explanation: "'final' prevents further inheritance."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid C++ access specifier?",
      options: ["public", "private", "protected", "internal"],
      correctAnswer: "internal",
      explanation: "'internal' is not a C++ access specifier."
    },
    {
      type: "multiple-choice",
      question: "What is the output of: int x = 5; cout << x++ << ++x;?",
      options: ["56", "65", "55", "66"],
      correctAnswer: "56",
      explanation: "x++ prints 5, then ++x increments to 6 and prints 6."
    },
    {
      type: "true-false",
      question: "C++ supports multiple inheritance.",
      correctAnswer: true,
      explanation: "C++ allows a class to inherit from multiple base classes."
    },
    {
      type: "true-false",
      question: "The 'delete' operator is used to deallocate memory allocated with 'new'.",
      correctAnswer: true,
      explanation: "'delete' deallocates memory allocated with 'new'."
    },
    {
      type: "true-false",
      question: "C++ does not support lambda expressions.",
      correctAnswer: false,
      explanation: "C++11 and later support lambda expressions."
    },
    {
      type: "short-answer",
      question: "What is the purpose of a destructor in C++?",
      correctAnswer: "To clean up resources when an object is destroyed",
      explanation: "Destructors free resources when an object goes out of scope."
    },
    {
      type: "short-answer",
      question: "Which header file is required for using std::vector?",
      correctAnswer: "<vector>",
      explanation: "<vector> is required for std::vector."
    },
    {
      type: "multiple-choice",
      question: "Which C++ feature allows code reuse without inheritance?",
      options: ["Templates", "Macros", "Namespaces", "Pointers"],
      correctAnswer: "Templates",
      explanation: "Templates enable generic programming and code reuse."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a valid STL container?",
      options: ["vector", "map", "array", "queue"],
      correctAnswer: "array",
      explanation: "'array' is not a standard STL container (std::array is, but 'array' alone is not)."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of the 'friend' keyword in C++?",
      options: ["Grant access to private members", "Create templates", "Define inheritance", "Handle exceptions"],
      correctAnswer: "Grant access to private members",
      explanation: "'friend' allows access to private/protected members."
    },
    {
      type: "true-false",
      question: "C++ supports exception handling using try-catch blocks.",
      correctAnswer: true,
      explanation: "C++ uses try-catch for exception handling."
    },
    {
      type: "true-false",
      question: "The 'const' keyword can be used with member functions.",
      correctAnswer: true,
      explanation: "'const' member functions cannot modify the object."
    },
    {
      type: "short-answer",
      question: "What is the main difference between 'struct' and 'class' in C++?",
      correctAnswer: "Default access is public for struct, private for class",
      explanation: "struct members are public by default, class members are private."
    },
    {
      type: "short-answer",
      question: "Which operator is overloaded for output streams in C++?",
      correctAnswer: "<<",
      explanation: "'<<' is overloaded for output streams."
    },
    {
      type: "multiple-choice",
      question: "Which C++11 feature allows for automatic type deduction?",
      options: ["auto", "decltype", "var", "typeof"],
      correctAnswer: "auto",
      explanation: "'auto' deduces the type automatically."
    },
    {
      type: "multiple-choice",
      question: "Which smart pointer is used for shared ownership in C++11?",
      options: ["std::shared_ptr", "std::unique_ptr", "std::auto_ptr", "std::weak_ptr"],
      correctAnswer: "std::shared_ptr",
      explanation: "std::shared_ptr allows shared ownership."
    },
    {
      type: "multiple-choice",
      question: "Which C++ feature allows a function to accept any number of arguments?",
      options: ["Variadic templates", "Function overloading", "Default arguments", "Inline functions"],
      correctAnswer: "Variadic templates",
      explanation: "Variadic templates allow functions to accept any number of arguments."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using RAII in C++?",
      correctAnswer: "Automatic resource management",
      explanation: "RAII ensures resources are released when objects go out of scope."
    }
  ],
  "Java Programming": [
    {
      type: "multiple-choice",
      question: "Which keyword is used to inherit a class in Java?",
      options: ["extends", "implements", "inherits", "super"],
      correctAnswer: "extends",
      explanation: "'extends' is used for class inheritance."
    },
    {
      type: "multiple-choice",
      question: "Which method is the entry point for a Java application?",
      options: ["main", "start", "run", "init"],
      correctAnswer: "main",
      explanation: "main() is the entry point."
    },
    {
      type: "multiple-choice",
      question: "Which interface is used for functional programming in Java 8?",
      options: ["Function", "Runnable", "Serializable", "Cloneable"],
      correctAnswer: "Function",
      explanation: "Function<T, R> is a functional interface in Java 8."
    },
    {
      type: "multiple-choice",
      question: "Which collection does NOT allow duplicate elements?",
      options: ["Set", "List", "Queue", "ArrayList"],
      correctAnswer: "Set",
      explanation: "Set does not allow duplicates."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to prevent method overriding?",
      options: ["final", "static", "private", "protected"],
      correctAnswer: "final",
      explanation: "'final' prevents method overriding."
    },
    {
      type: "true-false",
      question: "Java supports multiple inheritance through classes.",
      correctAnswer: false,
      explanation: "Java does not support multiple inheritance with classes."
    },
    {
      type: "true-false",
      question: "The 'static' keyword can be used with variables and methods.",
      correctAnswer: true,
      explanation: "'static' can be used with both variables and methods."
    },
    {
      type: "true-false",
      question: "Java uses garbage collection for memory management.",
      correctAnswer: true,
      explanation: "Java uses automatic garbage collection."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'super' keyword in Java?",
      correctAnswer: "To refer to the superclass",
      explanation: "'super' refers to the superclass."
    },
    {
      type: "short-answer",
      question: "Which package contains the Scanner class?",
      correctAnswer: "java.util",
      explanation: "Scanner is in java.util."
    },
    {
      type: "multiple-choice",
      question: "Which exception is checked at compile time?",
      options: ["IOException", "NullPointerException", "ArithmeticException", "ArrayIndexOutOfBoundsException"],
      correctAnswer: "IOException",
      explanation: "IOException is a checked exception."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to start a thread in Java?",
      options: ["start", "run", "begin", "init"],
      correctAnswer: "start",
      explanation: "start() begins thread execution."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to implement an interface?",
      options: ["implements", "extends", "interface", "instanceof"],
      correctAnswer: "implements",
      explanation: "'implements' is used for interfaces."
    },
    {
      type: "true-false",
      question: "Java supports lambda expressions since Java 8.",
      correctAnswer: true,
      explanation: "Lambda expressions were introduced in Java 8."
    },
    {
      type: "true-false",
      question: "The 'this' keyword can be used to call another constructor in the same class.",
      correctAnswer: true,
      explanation: "'this()' can call another constructor."
    },
    {
      type: "short-answer",
      question: "What is the main difference between '=='' and 'equals()' in Java?",
      correctAnswer: "'==' compares references, 'equals()' compares values",
      explanation: "'==' is reference comparison, 'equals()' is value comparison."
    },
    {
      type: "short-answer",
      question: "Which class is the root of the Java class hierarchy?",
      correctAnswer: "Object",
      explanation: "Object is the root class."
    },
    {
      type: "multiple-choice",
      question: "Which Java collection is thread-safe?",
      options: ["Vector", "ArrayList", "HashSet", "LinkedList"],
      correctAnswer: "Vector",
      explanation: "Vector is synchronized and thread-safe."
    },
    {
      type: "multiple-choice",
      question: "Which annotation is used for overriding a method?",
      options: ["@Override", "@Overload", "@Overrun", "@Implement"],
      correctAnswer: "@Override",
      explanation: "@Override is used for method overriding."
    },
    {
      type: "multiple-choice",
      question: "Which Java keyword is used for exception handling?",
      options: ["try", "catch", "throw", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "try, catch, and throw are all used for exception handling."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using generics in Java?",
      correctAnswer: "Type safety and code reusability",
      explanation: "Generics provide type safety and reusable code."
    }
  ],
  "Go Language Basics": [
    {
      type: "multiple-choice",
      question: "Which keyword is used to declare a variable in Go?",
      options: ["var", "let", "const", "define"],
      correctAnswer: "var",
      explanation: "'var' is used to declare variables."
    },
    {
      type: "multiple-choice",
      question: "Which function is the entry point of a Go program?",
      options: ["main", "start", "run", "init"],
      correctAnswer: "main",
      explanation: "main() is the entry point."
    },
    {
      type: "multiple-choice",
      question: "Which Go keyword is used for concurrency?",
      options: ["go", "concurrent", "thread", "async"],
      correctAnswer: "go",
      explanation: "'go' launches a goroutine."
    },
    {
      type: "multiple-choice",
      question: "Which built-in type is used for maps in Go?",
      options: ["map", "dict", "hash", "table"],
      correctAnswer: "map",
      explanation: "'map' is the built-in type for maps."
    },
    {
      type: "multiple-choice",
      question: "Which package is used for formatted I/O in Go?",
      options: ["fmt", "io", "input", "output"],
      correctAnswer: "fmt",
      explanation: "fmt is used for formatted I/O."
    },
    {
      type: "true-false",
      question: "Go supports garbage collection.",
      correctAnswer: true,
      explanation: "Go has automatic garbage collection."
    },
    {
      type: "true-false",
      question: "Go supports operator overloading.",
      correctAnswer: false,
      explanation: "Go does not support operator overloading."
    },
    {
      type: "true-false",
      question: "Go supports multiple return values from a function.",
      correctAnswer: true,
      explanation: "Functions in Go can return multiple values."
    },
    {
      type: "short-answer",
      question: "What is a goroutine in Go?",
      correctAnswer: "A lightweight thread managed by the Go runtime",
      explanation: "Goroutines are lightweight threads."
    },
    {
      type: "short-answer",
      question: "Which keyword is used to import packages in Go?",
      correctAnswer: "import",
      explanation: "'import' is used to include packages."
    },
    {
      type: "multiple-choice",
      question: "Which Go type is used for error handling?",
      options: ["error", "exception", "fail", "panic"],
      correctAnswer: "error",
      explanation: "'error' is the built-in type for errors."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to print output in Go?",
      options: ["fmt.Println", "print", "echo", "output"],
      correctAnswer: "fmt.Println",
      explanation: "fmt.Println prints output."
    },
    {
      type: "multiple-choice",
      question: "Which Go keyword is used to define a constant?",
      options: ["const", "let", "define", "static"],
      correctAnswer: "const",
      explanation: "'const' defines a constant."
    },
    {
      type: "true-false",
      question: "Go supports pointer arithmetic.",
      correctAnswer: false,
      explanation: "Go does not support pointer arithmetic."
    },
    {
      type: "true-false",
      question: "Go supports interfaces for polymorphism.",
      correctAnswer: true,
      explanation: "Interfaces enable polymorphism in Go."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'defer' keyword in Go?",
      correctAnswer: "To schedule a function call to run after the current function completes",
      explanation: "'defer' schedules a function to run after the current function."
    },
    {
      type: "short-answer",
      question: "Which Go keyword is used to handle panics?",
      correctAnswer: "recover",
      explanation: "'recover' is used to handle panics."
    },
    {
      type: "multiple-choice",
      question: "Which Go tool is used for dependency management?",
      options: ["go mod", "dep", "gom", "govendor"],
      correctAnswer: "go mod",
      explanation: "'go mod' is the official dependency management tool."
    },
    {
      type: "multiple-choice",
      question: "Which Go keyword is used to define a struct?",
      options: ["struct", "record", "object", "class"],
      correctAnswer: "struct",
      explanation: "'struct' defines a struct type."
    },
    {
      type: "multiple-choice",
      question: "Which Go function is used to create a new slice?",
      options: ["make", "new", "create", "slice"],
      correctAnswer: "make",
      explanation: "'make' creates slices, maps, and channels."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Go?",
      correctAnswer: "Simplicity, concurrency, and fast compilation",
      explanation: "Go is known for simplicity, concurrency, and speed."
    }
  ],
  "Rust for Beginners": [
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a constant in Rust?",
      options: ["const", "let", "static", "define"],
      correctAnswer: "const",
      explanation: "'const' is used to define compile-time constants."
    },
    {
      type: "multiple-choice",
      question: "What is the ownership model in Rust primarily designed to prevent?",
      options: ["Memory leaks", "Data races", "Null pointer dereferencing", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "Rust's ownership model prevents memory leaks, data races, and null pointer dereferencing."
    },
    {
      type: "multiple-choice",
      question: "Which trait must be implemented to allow a type to be formatted with {:?}?",
      options: ["Debug", "Display", "Clone", "Copy"],
      correctAnswer: "Debug",
      explanation: "The Debug trait enables {:?} formatting."
    },
    {
      type: "multiple-choice",
      question: "Which macro is used for printing to the console in Rust?",
      options: ["println!", "print!", "echo!", "write!"],
      correctAnswer: "println!",
      explanation: "println! prints to the console with a newline."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a module in Rust?",
      options: ["mod", "module", "namespace", "package"],
      correctAnswer: "mod",
      explanation: "'mod' defines a module."
    },
    {
      type: "true-false",
      question: "Rust supports garbage collection by default.",
      correctAnswer: false,
      explanation: "Rust does not use garbage collection; it uses ownership and borrowing."
    },
    {
      type: "true-false",
      question: "Rust allows multiple mutable references to the same data at the same time.",
      correctAnswer: false,
      explanation: "Rust enforces only one mutable reference at a time."
    },
    {
      type: "true-false",
      question: "Rust supports pattern matching with the match keyword.",
      correctAnswer: true,
      explanation: "The match keyword is used for pattern matching."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'Option' type in Rust?",
      correctAnswer: "To represent a value that may or may not be present",
      explanation: "Option is used for optional values."
    },
    {
      type: "short-answer",
      question: "Which keyword is used to handle errors that may occur during execution?",
      correctAnswer: "Result",
      explanation: "Result is used for error handling."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to create a new thread in Rust?",
      options: ["thread::spawn", "new_thread", "spawn_thread", "create_thread"],
      correctAnswer: "thread::spawn",
      explanation: "thread::spawn creates a new thread."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to import items from a module?",
      options: ["use", "import", "include", "require"],
      correctAnswer: "use",
      explanation: "'use' imports items from a module."
    },
    {
      type: "multiple-choice",
      question: "Which trait is required for a type to be cloned?",
      options: ["Clone", "Copy", "Debug", "Display"],
      correctAnswer: "Clone",
      explanation: "Clone trait allows types to be cloned."
    },
    {
      type: "true-false",
      question: "Rust supports operator overloading.",
      correctAnswer: true,
      explanation: "Rust allows operator overloading via traits."
    },
    {
      type: "true-false",
      question: "Rust's 'Vec' type is a growable array.",
      correctAnswer: true,
      explanation: "Vec is a growable, heap-allocated array."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of Rust's borrow checker?",
      correctAnswer: "Prevents data races and ensures memory safety",
      explanation: "The borrow checker enforces safe memory access."
    },
    {
      type: "short-answer",
      question: "Which macro is used for error handling in Rust?",
      correctAnswer: "panic!",
      explanation: "panic! macro is used to trigger a panic."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a trait in Rust?",
      options: ["trait", "interface", "protocol", "typeclass"],
      correctAnswer: "trait",
      explanation: "'trait' defines a trait."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to allocate memory on the heap in Rust?",
      options: ["Box::new", "malloc", "alloc", "heap_alloc"],
      correctAnswer: "Box::new",
      explanation: "Box::new allocates memory on the heap."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a lifetime parameter?",
      options: ["'a", "lifetime", "lt", "life"],
      correctAnswer: "'a",
      explanation: "Lifetimes are defined with a leading apostrophe."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'Cargo.toml' file?",
      correctAnswer: "To manage dependencies and project configuration",
      explanation: "Cargo.toml is the manifest file for Rust projects."
    }
  ],
  "PHP Web Development": [
    {
      type: "multiple-choice",
      question: "Which symbol is used to declare a variable in PHP?",
      options: ["$", "@", "#", "%"],
      correctAnswer: "$",
      explanation: "Variables in PHP start with $."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to include a file in PHP and halt execution if not found?",
      options: ["require", "include", "import", "load"],
      correctAnswer: "require",
      explanation: "require halts execution if the file is not found."
    },
    {
      type: "multiple-choice",
      question: "Which superglobal is used to access form data sent via POST?",
      options: ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
      correctAnswer: "$_POST",
      explanation: "$_POST accesses POST form data."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to start a session in PHP?",
      options: ["session_start", "start_session", "begin_session", "init_session"],
      correctAnswer: "session_start",
      explanation: "session_start() starts a session."
    },
    {
      type: "multiple-choice",
      question: "Which operator is used for string concatenation in PHP?",
      options: [".", "+", "&", "::"],
      correctAnswer: ".",
      explanation: "The dot (.) operator concatenates strings."
    },
    {
      type: "true-false",
      question: "PHP is a loosely typed language.",
      correctAnswer: true,
      explanation: "PHP does not require explicit type declarations."
    },
    {
      type: "true-false",
      question: "PHP code can be embedded directly into HTML.",
      correctAnswer: true,
      explanation: "PHP can be embedded in HTML files."
    },
    {
      type: "true-false",
      question: "PHP supports object-oriented programming.",
      correctAnswer: true,
      explanation: "PHP supports OOP features."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'echo' statement in PHP?",
      correctAnswer: "To output data to the browser",
      explanation: "echo outputs data."
    },
    {
      type: "short-answer",
      question: "Which function is used to hash passwords in PHP?",
      correctAnswer: "password_hash",
      explanation: "password_hash() securely hashes passwords."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to connect to a MySQL database in PHP (MySQLi)?",
      options: ["mysqli_connect", "mysql_connect", "pdo_connect", "db_connect"],
      correctAnswer: "mysqli_connect",
      explanation: "mysqli_connect() connects to MySQL."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to send an email in PHP?",
      options: ["mail", "sendmail", "email", "smtp"],
      correctAnswer: "mail",
      explanation: "mail() sends emails."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to get the length of a string in PHP?",
      options: ["strlen", "count", "length", "size"],
      correctAnswer: "strlen",
      explanation: "strlen() returns the length of a string."
    },
    {
      type: "true-false",
      question: "PHP supports namespaces since version 5.3.",
      correctAnswer: true,
      explanation: "Namespaces were introduced in PHP 5.3."
    },
    {
      type: "true-false",
      question: "PHP arrays can only store values of the same type.",
      correctAnswer: false,
      explanation: "PHP arrays can store mixed types."
    },
    {
      type: "short-answer",
      question: "What is the main use of the $_SERVER superglobal?",
      correctAnswer: "To access server and execution environment information",
      explanation: "$_SERVER provides server info."
    },
    {
      type: "short-answer",
      question: "Which function is used to redirect to another page in PHP?",
      correctAnswer: "header",
      explanation: "header() is used for redirection."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to include a file only once in PHP?",
      options: ["include_once", "require_once", "import_once", "load_once"],
      correctAnswer: "include_once",
      explanation: "include_once includes a file only once."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to get the current timestamp in PHP?",
      options: ["time", "now", "date", "current_time"],
      correctAnswer: "time",
      explanation: "time() returns the current Unix timestamp."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to escape special characters in a string for use in an SQL statement?",
      options: ["mysqli_real_escape_string", "addslashes", "escape_string", "sanitize_sql"],
      correctAnswer: "mysqli_real_escape_string",
      explanation: "mysqli_real_escape_string() escapes special characters for SQL."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using prepared statements in PHP?",
      correctAnswer: "To prevent SQL injection attacks",
      explanation: "Prepared statements help prevent SQL injection."
    }
  ],
  "Ruby Programming": [
    {
      type: "multiple-choice",
      question: "Which symbol is used to define an instance variable in Ruby?",
      options: ["@", "$", "#", "%"],
      correctAnswer: "@",
      explanation: "Instance variables in Ruby start with @."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to output text in Ruby?",
      options: ["puts", "print", "echo", "out"],
      correctAnswer: "puts",
      explanation: "puts outputs text with a newline."
    },
    {
      type: "multiple-choice",
      question: "Which keyword is used to define a class in Ruby?",
      options: ["class", "def", "module", "object"],
      correctAnswer: "class",
      explanation: "'class' defines a class."
    },
    {
      type: "multiple-choice",
      question: "Which method is called when a new object is created in Ruby?",
      options: ["initialize", "new", "create", "setup"],
      correctAnswer: "initialize",
      explanation: "initialize is the constructor method."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to convert a string to an integer in Ruby?",
      options: ["to_i", "to_int", "int", "parseInt"],
      correctAnswer: "to_i",
      explanation: "to_i converts a string to an integer."
    },
    {
      type: "true-false",
      question: "Ruby supports blocks, procs, and lambdas.",
      correctAnswer: true,
      explanation: "Ruby supports all three."
    },
    {
      type: "true-false",
      question: "Ruby is a statically typed language.",
      correctAnswer: false,
      explanation: "Ruby is dynamically typed."
    },
    {
      type: "true-false",
      question: "Ruby supports multiple inheritance.",
      correctAnswer: false,
      explanation: "Ruby uses modules for mixins, not multiple inheritance."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'attr_accessor' method in Ruby?",
      correctAnswer: "To create getter and setter methods for instance variables",
      explanation: "attr_accessor creates getter and setter methods."
    },
    {
      type: "short-answer",
      question: "Which method is used to check if an array includes a value in Ruby?",
      correctAnswer: "include?",
      explanation: "include? checks for array membership."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to iterate over each element in an array?",
      options: ["each", "forEach", "map", "collect"],
      correctAnswer: "each",
      explanation: "each iterates over array elements."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to concatenate arrays in Ruby?",
      options: ["concat", "+", "append", "merge"],
      correctAnswer: "concat",
      explanation: "concat joins arrays together."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to remove nil values from an array?",
      options: ["compact", "remove_nil", "filter_nil", "delete_nil"],
      correctAnswer: "compact",
      explanation: "compact removes nil values from arrays."
    },
    {
      type: "true-false",
      question: "Ruby supports exception handling with begin-rescue-end blocks.",
      correctAnswer: true,
      explanation: "begin-rescue-end is used for exception handling."
    },
    {
      type: "true-false",
      question: "Symbols in Ruby are mutable.",
      correctAnswer: false,
      explanation: "Symbols are immutable."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'yield' keyword in Ruby?",
      correctAnswer: "To transfer control from a method to a block",
      explanation: "yield passes control to a block."
    },
    {
      type: "short-answer",
      question: "Which method is used to convert an object to a string in Ruby?",
      correctAnswer: "to_s",
      explanation: "to_s converts objects to strings."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to sort an array in Ruby?",
      options: ["sort", "order", "arrange", "organize"],
      correctAnswer: "sort",
      explanation: "sort arranges array elements."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to remove the last element from an array?",
      options: ["pop", "remove_last", "delete_last", "shift"],
      correctAnswer: "pop",
      explanation: "pop removes the last element."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to get the length of a string in Ruby?",
      options: ["length", "size", "count", "len"],
      correctAnswer: "length",
      explanation: "length returns the number of characters in a string."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using blocks in Ruby?",
      correctAnswer: "To pass chunks of code to methods for flexible iteration and callbacks",
      explanation: "Blocks enable flexible code execution."
    }
  ],
  "Shell Scripting": [
    {
      type: "multiple-choice",
      question: "Which command is used to search for a pattern in files recursively?",
      options: ["grep -r", "find", "awk", "sed"],
      correctAnswer: "grep -r",
      explanation: "grep -r searches recursively for a pattern."
    },
    {
      type: "multiple-choice",
      question: "What does the 'set -e' command do in a shell script?",
      options: ["Exits on error", "Enables debugging", "Ignores errors", "Sets environment variables"],
      correctAnswer: "Exits on error",
      explanation: "set -e causes the script to exit if any command fails."
    },
    {
      type: "multiple-choice",
      question: "Which symbol is used for command substitution?",
      options: ["$()", "${}", "[]", "<>"],
      correctAnswer: "$()",
      explanation: "$() is used for command substitution."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to count the number of lines in a file?",
      options: ["wc -l", "nl", "count", "lines"],
      correctAnswer: "wc -l",
      explanation: "wc -l counts lines in a file."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to change file permissions?",
      options: ["chmod", "chown", "chgrp", "umask"],
      correctAnswer: "chmod",
      explanation: "chmod changes file permissions."
    },
    {
      type: "true-false",
      question: "The '&&' operator executes the next command only if the previous one succeeds.",
      correctAnswer: true,
      explanation: "'&&' is used for conditional execution."
    },
    {
      type: "true-false",
      question: "The 'export' command sets environment variables for child processes.",
      correctAnswer: true,
      explanation: "export makes variables available to child processes."
    },
    {
      type: "true-false",
      question: "The 'trap' command is used to handle signals in shell scripts.",
      correctAnswer: true,
      explanation: "trap is used for signal handling."
    },
    {
      type: "short-answer",
      question: "What is the purpose of the shebang (#!) at the top of a script?",
      correctAnswer: "Specifies the interpreter to use",
      explanation: "Shebang tells the system which interpreter to use."
    },
    {
      type: "short-answer",
      question: "Which command is used to display the last 10 lines of a file?",
      correctAnswer: "tail",
      explanation: "tail shows the last lines of a file."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to schedule a one-time task?",
      options: ["at", "cron", "batch", "now"],
      correctAnswer: "at",
      explanation: "at schedules one-time tasks."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to display running processes?",
      options: ["ps", "jobs", "top", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "ps, jobs, and top all display processes."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to compare two files line by line?",
      options: ["diff", "cmp", "comm", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "diff, cmp, and comm can compare files."
    },
    {
      type: "true-false",
      question: "The 'read' command is used to get user input in a shell script.",
      correctAnswer: true,
      explanation: "read gets user input."
    },
    {
      type: "true-false",
      question: "The 'source' command runs a script in a new shell.",
      correctAnswer: false,
      explanation: "source runs a script in the current shell."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'awk' command?",
      correctAnswer: "Text processing and pattern scanning",
      explanation: "awk is used for text processing."
    },
    {
      type: "short-answer",
      question: "Which command is used to find files by name?",
      correctAnswer: "find",
      explanation: "find locates files by name."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to display disk usage?",
      options: ["du", "df", "ls", "lsblk"],
      correctAnswer: "du",
      explanation: "du shows disk usage."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to compress files in Linux?",
      options: ["gzip", "tar", "zip", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "gzip, tar, and zip can compress files."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to display the current working directory?",
      options: ["pwd", "cwd", "dir", "ls"],
      correctAnswer: "pwd",
      explanation: "pwd prints the working directory."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using shell scripting?",
      correctAnswer: "Automate repetitive tasks",
      explanation: "Shell scripts automate tasks."
    }
  ],
  "Scala for Data Science": [
    {
      type: "multiple-choice",
      question: "Which library is commonly used for data analysis in Scala?",
      options: ["Breeze", "Pandas", "NumPy", "Matplotlib"],
      correctAnswer: "Breeze",
      explanation: "Breeze is a popular Scala library for data analysis."
    },
    {
      type: "multiple-choice",
      question: "Which framework is used for distributed data processing in Scala?",
      options: ["Apache Spark", "Hadoop", "Flink", "Storm"],
      correctAnswer: "Apache Spark",
      explanation: "Apache Spark is widely used for distributed data processing."
    },
    {
      type: "multiple-choice",
      question: "Which Scala collection is immutable by default?",
      options: ["List", "ArrayBuffer", "Set", "Map"],
      correctAnswer: "List",
      explanation: "List is immutable by default."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to read a CSV file in Spark DataFrame?",
      options: ["read.csv", "load.csv", "import.csv", "open.csv"],
      correctAnswer: "read.csv",
      explanation: "read.csv is used to read CSV files."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to apply a transformation to each element in a Scala collection?",
      options: ["map", "foreach", "filter", "reduce"],
      correctAnswer: "map",
      explanation: "map applies a function to each element."
    },
    {
      type: "true-false",
      question: "Scala supports both object-oriented and functional programming.",
      correctAnswer: true,
      explanation: "Scala is a hybrid language."
    },
    {
      type: "true-false",
      question: "Spark DataFrames are immutable.",
      correctAnswer: true,
      explanation: "DataFrames in Spark are immutable."
    },
    {
      type: "true-false",
      question: "Scala does not support pattern matching.",
      correctAnswer: false,
      explanation: "Scala supports pattern matching."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of the 'reduce' function in Scala?",
      correctAnswer: "To aggregate elements of a collection",
      explanation: "reduce aggregates elements."
    },
    {
      type: "short-answer",
      question: "Which method is used to remove duplicates from a Scala collection?",
      correctAnswer: "distinct",
      explanation: "distinct removes duplicates."
    },
    {
      type: "multiple-choice",
      question: "Which library is used for linear algebra in Scala?",
      options: ["Breeze", "Algebird", "Scalaz", "Cats"],
      correctAnswer: "Breeze",
      explanation: "Breeze is used for linear algebra."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to filter elements in a Scala collection?",
      options: ["filter", "select", "where", "findAll"],
      correctAnswer: "filter",
      explanation: "filter selects elements based on a predicate."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to group elements in a Scala collection?",
      options: ["groupBy", "group", "partition", "split"],
      correctAnswer: "groupBy",
      explanation: "groupBy groups elements by a function."
    },
    {
      type: "true-false",
      question: "Scala supports higher-order functions.",
      correctAnswer: true,
      explanation: "Higher-order functions are supported in Scala."
    },
    {
      type: "true-false",
      question: "Scala's Option type is used for optional values.",
      correctAnswer: true,
      explanation: "Option represents optional values."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'flatMap' function in Scala?",
      correctAnswer: "To flatten and map collections",
      explanation: "flatMap maps and flattens collections."
    },
    {
      type: "short-answer",
      question: "Which method is used to sort a Scala collection?",
      correctAnswer: "sorted",
      explanation: "sorted sorts collections."
    },
    {
      type: "multiple-choice",
      question: "Which library is used for machine learning in Scala?",
      options: ["Spark MLlib", "Scikit-learn", "TensorFlow", "Keras"],
      correctAnswer: "Spark MLlib",
      explanation: "Spark MLlib is used for machine learning."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to join two DataFrames in Spark?",
      options: ["join", "merge", "combine", "union"],
      correctAnswer: "join",
      explanation: "join merges DataFrames."
    },
    {
      type: "multiple-choice",
      question: "Which function is used to cache a DataFrame in Spark?",
      options: ["cache", "persist", "store", "save"],
      correctAnswer: "cache",
      explanation: "cache() caches a DataFrame."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Scala for data science?",
      correctAnswer: "Combines functional and object-oriented programming with big data tools",
      explanation: "Scala is powerful for big data and functional programming."
    }
  ],
  "UI/UX Design Principles": [
    {
      type: "multiple-choice",
      question: "Which principle emphasizes consistency in UI design?",
      options: ["Consistency", "Feedback", "Affordance", "Mapping"],
      correctAnswer: "Consistency",
      explanation: "Consistency is a key UI/UX principle."
    },
    {
      type: "multiple-choice",
      question: "Which law states that users spend most of their time on other sites?",
      options: ["Jakob's Law", "Fitts's Law", "Hick's Law", "Miller's Law"],
      correctAnswer: "Jakob's Law",
      explanation: "Jakob's Law is about user expectations from other sites."
    },
    {
      type: "multiple-choice",
      question: "Which principle is about providing clear feedback to users?",
      options: ["Feedback", "Visibility", "Constraints", "Consistency"],
      correctAnswer: "Feedback",
      explanation: "Feedback keeps users informed."
    },
    {
      type: "multiple-choice",
      question: "Which law relates to the time it takes to make a decision?",
      options: ["Hick's Law", "Fitts's Law", "Miller's Law", "Jakob's Law"],
      correctAnswer: "Hick's Law",
      explanation: "Hick's Law is about decision time and choices."
    },
    {
      type: "multiple-choice",
      question: "Which principle is about making elements look clickable?",
      options: ["Affordance", "Feedback", "Constraints", "Mapping"],
      correctAnswer: "Affordance",
      explanation: "Affordance is about perceived action possibilities."
    },
    {
      type: "true-false",
      question: "Good UI design should minimize cognitive load.",
      correctAnswer: true,
      explanation: "Minimizing cognitive load is essential."
    },
    {
      type: "true-false",
      question: "Accessibility is not a concern in UI/UX design.",
      correctAnswer: false,
      explanation: "Accessibility is crucial."
    },
    {
      type: "true-false",
      question: "Progressive disclosure is a technique to show information as needed.",
      correctAnswer: true,
      explanation: "Progressive disclosure reveals info as needed."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of user personas?",
      correctAnswer: "To represent typical users and guide design decisions",
      explanation: "Personas help focus on user needs."
    },
    {
      type: "short-answer",
      question: "Which principle is about grouping related items together?",
      correctAnswer: "Proximity",
      explanation: "Proximity groups related items."
    },
    {
      type: "multiple-choice",
      question: "Which law relates to the distance and size of targets?",
      options: ["Fitts's Law", "Hick's Law", "Miller's Law", "Jakob's Law"],
      correctAnswer: "Fitts's Law",
      explanation: "Fitts's Law is about target size and distance."
    },
    {
      type: "multiple-choice",
      question: "Which principle is about limiting user choices to reduce errors?",
      options: ["Constraints", "Affordance", "Feedback", "Consistency"],
      correctAnswer: "Constraints",
      explanation: "Constraints limit user actions."
    },
    {
      type: "multiple-choice",
      question: "Which principle is about making important elements stand out?",
      options: ["Visual hierarchy", "Feedback", "Mapping", "Constraints"],
      correctAnswer: "Visual hierarchy",
      explanation: "Visual hierarchy emphasizes important elements."
    },
    {
      type: "true-false",
      question: "Whitespace can improve readability and focus.",
      correctAnswer: true,
      explanation: "Whitespace helps readability."
    },
    {
      type: "true-false",
      question: "User testing is not necessary if the designer is experienced.",
      correctAnswer: false,
      explanation: "User testing is always important."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of prototyping in UI/UX design?",
      correctAnswer: "To test and validate design ideas before development",
      explanation: "Prototyping helps validate ideas."
    },
    {
      type: "short-answer",
      question: "Which principle is about aligning elements to create order?",
      correctAnswer: "Alignment",
      explanation: "Alignment creates order and structure."
    },
    {
      type: "multiple-choice",
      question: "Which law relates to the capacity of short-term memory?",
      options: ["Miller's Law", "Fitts's Law", "Hick's Law", "Jakob's Law"],
      correctAnswer: "Miller's Law",
      explanation: "Miller's Law is about memory capacity."
    },
    {
      type: "multiple-choice",
      question: "Which principle is about providing clear navigation cues?",
      options: ["Visibility", "Feedback", "Constraints", "Mapping"],
      correctAnswer: "Visibility",
      explanation: "Visibility provides navigation cues."
    },
    {
      type: "multiple-choice",
      question: "Which principle is about matching the system to the real world?",
      options: ["Mapping", "Feedback", "Constraints", "Consistency"],
      correctAnswer: "Mapping",
      explanation: "Mapping matches system to real-world expectations."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of usability testing?",
      correctAnswer: "To identify and fix usability issues",
      explanation: "Usability testing finds and fixes problems."
    }
  ],
  "Figma for Designers": [
    {
      type: "multiple-choice",
      question: "Which feature in Figma allows multiple users to edit a file simultaneously?",
      options: ["Live Collaboration", "Version History", "Prototyping", "Components"],
      correctAnswer: "Live Collaboration",
      explanation: "Figma's real-time collaboration allows multiple users to edit at once."
    },
    {
      type: "multiple-choice",
      question: "What is the primary benefit of using Figma's Auto Layout?",
      options: ["Responsive design", "Exporting assets", "Commenting", "Version control"],
      correctAnswer: "Responsive design",
      explanation: "Auto Layout helps create responsive and adaptive designs."
    },
    {
      type: "multiple-choice",
      question: "Which Figma feature allows you to reuse design elements across files?",
      options: ["Components", "Frames", "Pages", "Prototypes"],
      correctAnswer: "Components",
      explanation: "Components are reusable design elements in Figma."
    },
    {
      type: "multiple-choice",
      question: "What does the 'Instance' of a component in Figma mean?",
      options: ["A copy linked to the master component", "A locked layer", "A hidden element", "A grouped object"],
      correctAnswer: "A copy linked to the master component",
      explanation: "Instances inherit properties from the main component."
    },
    {
      type: "true-false",
      question: "Figma supports version history for design files.",
      correctAnswer: true,
      explanation: "Figma keeps a version history for all files."
    },
    {
      type: "true-false",
      question: "You cannot prototype interactions in Figma.",
      correctAnswer: false,
      explanation: "Figma supports prototyping and interactive flows."
    },
    {
      type: "true-false",
      question: "Figma plugins can automate repetitive design tasks.",
      correctAnswer: true,
      explanation: "Plugins extend Figma's functionality."
    },
    {
      type: "short-answer",
      question: "What is the main use of Figma's 'Constraints' feature?",
      correctAnswer: "To control how objects resize within frames",
      explanation: "Constraints help with responsive layouts."
    },
    {
      type: "short-answer",
      question: "Name a Figma feature that helps organize design systems.",
      correctAnswer: "Assets panel or Team Libraries",
      explanation: "Assets and libraries help manage design systems."
    },
    {
      type: "multiple-choice",
      question: "Which export format is NOT supported by Figma?",
      options: ["SVG", "PNG", "JPG", "PSD"],
      correctAnswer: "PSD",
      explanation: "Figma does not export directly to Photoshop's PSD format."
    },
    {
      type: "multiple-choice",
      question: "What is the benefit of using 'Variants' in Figma components?",
      options: ["Organize multiple states", "Increase file size", "Lock components", "Hide layers"],
      correctAnswer: "Organize multiple states",
      explanation: "Variants allow multiple states in a single component."
    },
    {
      type: "multiple-choice",
      question: "Which tool in Figma is used to create vector shapes?",
      options: ["Pen Tool", "Move Tool", "Frame Tool", "Slice Tool"],
      correctAnswer: "Pen Tool",
      explanation: "The Pen Tool is used for vector drawing."
    },
    {
      type: "multiple-choice",
      question: "What does the 'Prototype' tab in Figma allow you to do?",
      options: ["Create interactive flows", "Export assets", "Edit text", "Manage comments"],
      correctAnswer: "Create interactive flows",
      explanation: "The Prototype tab is for linking frames and creating flows."
    },
    {
      type: "true-false",
      question: "Figma's Team Libraries allow sharing components across projects.",
      correctAnswer: true,
      explanation: "Team Libraries enable sharing and reuse."
    },
    {
      type: "true-false",
      question: "You can only use Figma on Mac OS.",
      correctAnswer: false,
      explanation: "Figma is browser-based and cross-platform."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of Figma's browser-based approach?",
      correctAnswer: "Accessibility from any device with internet",
      explanation: "Figma is accessible anywhere."
    },
    {
      type: "short-answer",
      question: "How do you share a Figma file for feedback?",
      correctAnswer: "By sharing a link with permissions",
      explanation: "Figma files can be shared via links."
    },
    {
      type: "multiple-choice",
      question: "Which Figma feature helps maintain consistent spacing?",
      options: ["Auto Layout", "Constraints", "Grids", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All these features help with spacing."
    },
    {
      type: "multiple-choice",
      question: "What is the use of the 'Inspect' panel in Figma?",
      options: ["View CSS and code", "Edit text", "Draw shapes", "Export images"],
      correctAnswer: "View CSS and code",
      explanation: "Inspect panel provides code for developers."
    },
    {
      type: "multiple-choice",
      question: "Which shortcut duplicates a selection in Figma?",
      options: ["Ctrl/Cmd + D", "Ctrl/Cmd + C", "Ctrl/Cmd + V", "Ctrl/Cmd + X"],
      correctAnswer: "Ctrl/Cmd + D",
      explanation: "Ctrl/Cmd + D duplicates the selection."
    },
    {
      type: "true-false",
      question: "Figma allows commenting directly on designs.",
      correctAnswer: true,
      explanation: "Commenting is built into Figma."
    },
    {
      type: "short-answer",
      question: "What is a 'Frame' in Figma?",
      correctAnswer: "A container for design elements, like an artboard",
      explanation: "Frames are like artboards in Figma."
    }
  ],
  "Adobe XD Crash Course": [
    {
      type: "multiple-choice",
      question: "Which feature in Adobe XD allows you to create interactive prototypes?",
      options: ["Prototype Mode", "Design Mode", "Share Mode", "Asset Panel"],
      correctAnswer: "Prototype Mode",
      explanation: "Prototype Mode is for creating interactions."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of the Repeat Grid in Adobe XD?",
      options: ["Duplicate content quickly", "Export assets", "Create animations", "Edit text"],
      correctAnswer: "Duplicate content quickly",
      explanation: "Repeat Grid is for duplicating lists and grids."
    },
    {
      type: "multiple-choice",
      question: "Which export format is NOT supported by Adobe XD?",
      options: ["PNG", "SVG", "JPG", "PSD"],
      correctAnswer: "PSD",
      explanation: "Adobe XD does not export directly to PSD."
    },
    {
      type: "multiple-choice",
      question: "What does the 'Component' feature in Adobe XD allow?",
      options: ["Reusable design elements", "Exporting code", "Creating animations", "Editing images"],
      correctAnswer: "Reusable design elements",
      explanation: "Components are reusable in XD."
    },
    {
      type: "true-false",
      question: "Adobe XD supports real-time collaboration.",
      correctAnswer: true,
      explanation: "XD supports coediting."
    },
    {
      type: "true-false",
      question: "You cannot create animations in Adobe XD.",
      correctAnswer: false,
      explanation: "XD supports auto-animate and transitions."
    },
    {
      type: "true-false",
      question: "Adobe XD plugins can extend its functionality.",
      correctAnswer: true,
      explanation: "Plugins add features to XD."
    },
    {
      type: "short-answer",
      question: "What is the main use of the Asset Panel in XD?",
      correctAnswer: "Manage colors, character styles, and components",
      explanation: "Asset Panel organizes design assets."
    },
    {
      type: "short-answer",
      question: "How do you share a prototype in XD?",
      correctAnswer: "By generating a shareable link",
      explanation: "XD allows sharing via links."
    },
    {
      type: "multiple-choice",
      question: "Which feature helps create responsive layouts in XD?",
      options: ["Responsive Resize", "Repeat Grid", "Prototype Mode", "Asset Panel"],
      correctAnswer: "Responsive Resize",
      explanation: "Responsive Resize adapts layouts."
    },
    {
      type: "multiple-choice",
      question: "What is the use of 'States' in XD components?",
      options: ["Create interactive variations", "Export assets", "Edit text", "Lock layers"],
      correctAnswer: "Create interactive variations",
      explanation: "States allow different component variations."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used to draw vector shapes in XD?",
      options: ["Pen Tool", "Rectangle Tool", "Ellipse Tool", "Line Tool"],
      correctAnswer: "Pen Tool",
      explanation: "Pen Tool is for vector drawing."
    },
    {
      type: "multiple-choice",
      question: "What does the 'Prototype' tab in XD allow you to do?",
      options: ["Link artboards and create flows", "Export assets", "Edit text", "Manage comments"],
      correctAnswer: "Link artboards and create flows",
      explanation: "Prototype tab is for interactions."
    },
    {
      type: "true-false",
      question: "XD's Design Specs help developers implement designs.",
      correctAnswer: true,
      explanation: "Design Specs provide measurements and assets."
    },
    {
      type: "true-false",
      question: "You can only use Adobe XD on Windows.",
      correctAnswer: false,
      explanation: "XD is available on both Mac and Windows."
    },
    {
      type: "short-answer",
      question: "What is the main advantage of XD's cloud documents?",
      correctAnswer: "Access and collaborate from anywhere",
      explanation: "Cloud documents enable remote work."
    },
    {
      type: "short-answer",
      question: "How do you add comments to a shared XD prototype?",
      correctAnswer: "Via the web link's comment feature",
      explanation: "Comments can be added on shared links."
    },
    {
      type: "multiple-choice",
      question: "Which XD feature helps maintain consistent spacing?",
      options: ["Smart Guides", "Repeat Grid", "Responsive Resize", "All of the above"],
      correctAnswer: "All of the above",
      explanation: "All these features help with spacing."
    },
    {
      type: "multiple-choice",
      question: "What is the use of the 'Share' tab in XD?",
      options: ["Generate links for sharing", "Edit text", "Draw shapes", "Export images"],
      correctAnswer: "Generate links for sharing",
      explanation: "Share tab is for sharing prototypes."
    },
    {
      type: "multiple-choice",
      question: "Which shortcut duplicates a selection in XD?",
      options: ["Ctrl/Cmd + D", "Ctrl/Cmd + C", "Ctrl/Cmd + V", "Ctrl/Cmd + X"],
      correctAnswer: "Ctrl/Cmd + D",
      explanation: "Ctrl/Cmd + D duplicates the selection."
    },
    {
      type: "true-false",
      question: "XD allows commenting directly on designs.",
      correctAnswer: true,
      explanation: "Commenting is built into XD."
    },
    {
      type: "short-answer",
      question: "What is an 'Artboard' in XD?",
      correctAnswer: "A canvas for designing screens",
      explanation: "Artboards are like pages or screens."
    }
  ],
  "Web Accessibility": [
    {
      type: "multiple-choice",
      question: "Which guideline is the global standard for web accessibility?",
      options: ["WCAG", "HTML5", "ARIA", "WAI"],
      correctAnswer: "WCAG",
      explanation: "WCAG (Web Content Accessibility Guidelines) is the standard."
    },
    {
      type: "multiple-choice",
      question: "What does ARIA stand for in web accessibility?",
      options: ["Accessible Rich Internet Applications", "Automated Responsive Internet Applications", "Accessible Responsive Interface API", "Advanced Rich Internet Applications"],
      correctAnswer: "Accessible Rich Internet Applications",
      explanation: "ARIA is a set of attributes for accessibility."
    },
    {
      type: "multiple-choice",
      question: "Which HTML element is best for navigation menus?",
      options: ["<nav>", "<div>", "<span>", "<section>"],
      correctAnswer: "<nav>",
      explanation: "<nav> is semantically correct for navigation."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of alt text on images?",
      options: ["Describe images for screen readers", "Improve SEO", "Add captions", "Change image size"],
      correctAnswer: "Describe images for screen readers",
      explanation: "Alt text helps visually impaired users."
    },
    {
      type: "true-false",
      question: "Keyboard navigation is essential for accessibility.",
      correctAnswer: true,
      explanation: "Many users rely on keyboard navigation."
    },
    {
      type: "true-false",
      question: "Color contrast does not affect accessibility.",
      correctAnswer: false,
      explanation: "Good contrast is crucial for readability."
    },
    {
      type: "true-false",
      question: "Screen readers can interpret semantic HTML elements.",
      correctAnswer: true,
      explanation: "Semantic HTML improves accessibility."
    },
    {
      type: "short-answer",
      question: "What is the main goal of web accessibility?",
      correctAnswer: "To make web content usable by everyone, including people with disabilities",
      explanation: "Accessibility ensures inclusivity."
    },
    {
      type: "short-answer",
      question: "Name a tool for testing web accessibility.",
      correctAnswer: "axe, Lighthouse, or WAVE",
      explanation: "These tools help test accessibility."
    },
    {
      type: "multiple-choice",
      question: "Which ARIA role is used for main content?",
      options: ["main", "banner", "navigation", "contentinfo"],
      correctAnswer: "main",
      explanation: "'main' role identifies the main content."
    },
    {
      type: "multiple-choice",
      question: "What is a skip link?",
      options: ["A link to skip to main content", "A broken link", "A link to another site", "A link to a PDF"],
      correctAnswer: "A link to skip to main content",
      explanation: "Skip links help keyboard users."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a principle of WCAG?",
      options: ["Perceivable", "Operable", "Understandable", "Customizable"],
      correctAnswer: "Customizable",
      explanation: "The four principles are Perceivable, Operable, Understandable, Robust."
    },
    {
      type: "multiple-choice",
      question: "Which HTML attribute improves accessibility for form inputs?",
      options: ["label", "placeholder", "value", "type"],
      correctAnswer: "label",
      explanation: "Labels help screen readers identify inputs."
    },
    {
      type: "true-false",
      question: "Accessible websites benefit all users, not just those with disabilities.",
      correctAnswer: true,
      explanation: "Accessibility improves usability for everyone."
    },
    {
      type: "true-false",
      question: "ARIA attributes should be used instead of semantic HTML whenever possible.",
      correctAnswer: false,
      explanation: "Semantic HTML should be preferred."
    },
    {
      type: "short-answer",
      question: "What is the purpose of focus indicators?",
      correctAnswer: "To show which element is currently focused",
      explanation: "Focus indicators help keyboard users."
    },
    {
      type: "short-answer",
      question: "Name a disability that web accessibility addresses.",
      correctAnswer: "Visual, auditory, motor, or cognitive disabilities",
      explanation: "Accessibility covers a range of disabilities."
    },
    {
      type: "multiple-choice",
      question: "Which CSS property can hide content visually but keep it accessible to screen readers?",
      options: ["clip", "display: none", "visibility: hidden", "opacity: 0"],
      correctAnswer: "clip",
      explanation: "clip or visually-hidden classes hide visually but not from screen readers."
    },
    {
      type: "multiple-choice",
      question: "What is the minimum recommended color contrast ratio for normal text?",
      options: ["4.5:1", "2:1", "3:1", "7:1"],
      correctAnswer: "4.5:1",
      explanation: "WCAG recommends at least 4.5:1 for normal text."
    },
    {
      type: "multiple-choice",
      question: "Which HTML element is best for marking up navigation landmarks?",
      options: ["<nav>", "<header>", "<footer>", "<aside>"],
      correctAnswer: "<nav>",
      explanation: "<nav> is for navigation landmarks."
    },
    {
      type: "true-false",
      question: "Web accessibility is a legal requirement in many countries.",
      correctAnswer: true,
      explanation: "Many countries have accessibility laws."
    },
    {
      type: "short-answer",
      question: "What is the purpose of semantic HTML?",
      correctAnswer: "To provide meaning and structure for assistive technologies",
      explanation: "Semantic HTML improves accessibility."
    }
  ],
  "Design Systems": [

    {
      type: "multiple-choice",
      question: "What is the primary purpose of a design system?",
      options: ["Ensure consistency", "Increase code size", "Limit creativity", "Reduce accessibility"],
      correctAnswer: "Ensure consistency",
      explanation: "Design systems provide consistent UI and UX patterns."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a typical component of a design system?",
      options: ["Color palette", "Typography", "API endpoints", "Component library"],
      correctAnswer: "API endpoints",
      explanation: "API endpoints are not part of a design system."
    },
    {
      type: "multiple-choice",
      question: "What is a 'token' in the context of design systems?",
      options: ["A variable for design values", "A UI component", "A user authentication method", "A CSS selector"],
      correctAnswer: "A variable for design values",
      explanation: "Tokens store values like colors, spacing, and typography."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used to document design systems?",
      options: ["Storybook", "Webpack", "Jest", "Redux"],
      correctAnswer: "Storybook",
      explanation: "Storybook is popular for documenting UI components."
    },
    {
      type: "true-false",
      question: "Design systems can help speed up development.",
      correctAnswer: true,
      explanation: "Reusable components and guidelines accelerate development."
    },
    {
      type: "true-false",
      question: "A design system should never be updated once published.",
      correctAnswer: false,
      explanation: "Design systems evolve with product needs."
    },
    {
      type: "true-false",
      question: "Design tokens can be used for theming applications.",
      correctAnswer: true,
      explanation: "Tokens enable easy theming and customization."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using a component library?",
      correctAnswer: "Reusable, consistent UI elements",
      explanation: "Component libraries ensure consistency and reusability."
    },
    {
      type: "short-answer",
      question: "Name a popular open-source design system.",
      correctAnswer: "Material Design, Ant Design, or Carbon Design System",
      explanation: "These are widely used open-source design systems."
    },
    {
      type: "multiple-choice",
      question: "Which role is responsible for maintaining a design system?",
      options: ["Design system team", "Frontend developers", "Backend developers", "QA testers"],
      correctAnswer: "Design system team",
      explanation: "A dedicated team often maintains the system."
    },
    {
      type: "multiple-choice",
      question: "What is the relationship between a design system and a style guide?",
      options: ["A design system includes a style guide", "They are unrelated", "A style guide includes a design system", "They are the same"],
      correctAnswer: "A design system includes a style guide",
      explanation: "Style guides are part of design systems."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a benefit of design tokens?",
      options: ["Scalability", "Increased manual work", "Inconsistent UI", "Slower development"],
      correctAnswer: "Scalability",
      explanation: "Tokens make scaling design systems easier."
    },
    {
      type: "multiple-choice",
      question: "What is a 'pattern' in a design system?",
      options: ["A reusable solution to a common problem", "A CSS class", "A color swatch", "A font family"],
      correctAnswer: "A reusable solution to a common problem",
      explanation: "Patterns solve recurring design problems."
    },
    {
      type: "true-false",
      question: "Design systems can improve accessibility.",
      correctAnswer: true,
      explanation: "Accessibility guidelines are often built in."
    },
    {
      type: "true-false",
      question: "Design systems are only for designers.",
      correctAnswer: false,
      explanation: "They benefit designers, developers, and others."
    },
    {
      type: "short-answer",
      question: "What is the main challenge in adopting a design system?",
      correctAnswer: "Team buy-in and integration with existing workflows",
      explanation: "Adoption requires cultural and technical changes."
    },
    {
      type: "short-answer",
      question: "How do design systems support responsive design?",
      correctAnswer: "By providing scalable components and layout guidelines",
      explanation: "Design systems include responsive patterns."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a benefit of a design system?",
      options: ["Inconsistent branding", "Faster prototyping", "Improved collaboration", "Easier maintenance"],
      correctAnswer: "Inconsistent branding",
      explanation: "Design systems improve branding consistency."
    },
    {
      type: "multiple-choice",
      question: "What is the use of a 'changelog' in a design system?",
      options: ["Track updates and changes", "Store images", "Manage user accounts", "Test performance"],
      correctAnswer: "Track updates and changes",
      explanation: "Changelogs document system updates."
    },
    {
      type: "multiple-choice",
      question: "Which format is commonly used for design tokens?",
      options: ["JSON", "XML", "CSV", "TXT"],
      correctAnswer: "JSON",
      explanation: "JSON is a standard for design tokens."
    },
    {
      type: "true-false",
      question: "A design system can include code snippets for developers.",
      correctAnswer: true,
      explanation: "Code snippets help implement design patterns."
    },
    {
      type: "short-answer",
      question: "What is the main goal of a design system?",
      correctAnswer: "Consistency, efficiency, and scalability in design and development",
      explanation: "Design systems aim for these outcomes."
    }

  ],
  "Motion Design with Framer Motion": [
    {
      type: "multiple-choice",
      question: "Which library is Framer Motion built on top of?",
      options: ["React", "Vue", "Angular", "Svelte"],
      correctAnswer: "React",
      explanation: "Framer Motion is a React animation library."
    },
    {
      type: "multiple-choice",
      question: "What is the primary hook used in Framer Motion for animation?",
      options: ["useAnimation", "useEffect", "useState", "useMotion"],
      correctAnswer: "useAnimation",
      explanation: "useAnimation controls animations in Framer Motion."
    },
    {
      type: "multiple-choice",
      question: "Which prop is used to animate a component in Framer Motion?",
      options: ["animate", "motion", "transition", "effect"],
      correctAnswer: "animate",
      explanation: "The 'animate' prop triggers animations."
    },
    {
      type: "multiple-choice",
      question: "What does the 'initial' prop define in Framer Motion?",
      options: ["Starting state", "End state", "Transition duration", "Component type"],
      correctAnswer: "Starting state",
      explanation: "'initial' sets the starting animation state."
    },
    {
      type: "true-false",
      question: "Framer Motion supports gesture-based animations.",
      correctAnswer: true,
      explanation: "Gestures like drag and hover are supported."
    },
    {
      type: "true-false",
      question: "You cannot animate SVG elements with Framer Motion.",
      correctAnswer: false,
      explanation: "SVGs are fully supported."
    },
    {
      type: "true-false",
      question: "Framer Motion can animate layout changes automatically.",
      correctAnswer: true,
      explanation: "Layout animations are a key feature."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using Framer Motion over CSS animations?",
      correctAnswer: "Declarative, React-based, and interactive animations",
      explanation: "Framer Motion integrates with React and is highly interactive."
    },
    {
      type: "short-answer",
      question: "Name a feature unique to Framer Motion for React.",
      correctAnswer: "AnimatePresence or layout animations",
      explanation: "These features are unique to Framer Motion."
    },
    {
      type: "multiple-choice",
      question: "Which component is used to animate presence in Framer Motion?",
      options: ["AnimatePresence", "MotionGroup", "Presence", "AnimateGroup"],
      correctAnswer: "AnimatePresence",
      explanation: "AnimatePresence handles enter/exit animations."
    },
    {
      type: "multiple-choice",
      question: "What is the use of the 'transition' prop in Framer Motion?",
      options: ["Control timing and easing", "Set initial state", "Define gestures", "Change color"],
      correctAnswer: "Control timing and easing",
      explanation: "'transition' controls animation timing."
    },
    {
      type: "multiple-choice",
      question: "Which gesture is NOT supported by Framer Motion?",
      options: ["Pinch", "Drag", "Hover", "Swipe"],
      correctAnswer: "Pinch",
      explanation: "Pinch is not natively supported."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of layout animations?",
      options: ["Smooth transitions on layout changes", "Faster rendering", "Less code", "No dependencies"],
      correctAnswer: "Smooth transitions on layout changes",
      explanation: "Layout animations make UI changes smooth."
    },
    {
      type: "true-false",
      question: "Framer Motion can be used with TypeScript.",
      correctAnswer: true,
      explanation: "TypeScript is supported."
    },
    {
      type: "true-false",
      question: "Framer Motion animations are limited to opacity and position.",
      correctAnswer: false,
      explanation: "Many properties can be animated."
    },
    {
      type: "short-answer",
      question: "What is the main use of the 'whileHover' prop?",
      correctAnswer: "Animate a component on hover",
      explanation: "'whileHover' triggers hover animations."
    },
    {
      type: "short-answer",
      question: "How do you sequence animations in Framer Motion?",
      correctAnswer: "Using variants or the useAnimation hook",
      explanation: "Variants and useAnimation allow sequencing."
    },
    {
      type: "multiple-choice",
      question: "Which Framer Motion feature helps with exit animations?",
      options: ["AnimatePresence", "ExitMotion", "LeaveGroup", "ExitPresence"],
      correctAnswer: "AnimatePresence",
      explanation: "AnimatePresence handles exit animations."
    },
    {
      type: "multiple-choice",
      question: "What is the use of the 'drag' prop in Framer Motion?",
      options: ["Enable drag gestures", "Change color", "Set opacity", "Animate text"],
      correctAnswer: "Enable drag gestures",
      explanation: "'drag' enables draggable components."
    },
    {
      type: "multiple-choice",
      question: "Which prop is used to define animation variants?",
      options: ["variants", "states", "modes", "types"],
      correctAnswer: "variants",
      explanation: "'variants' define animation states."
    },
    {
      type: "true-false",
      question: "Framer Motion can animate children independently.",
      correctAnswer: true,
      explanation: "Children can have their own animations."
    },
    {
      type: "short-answer",
      question: "What is the main goal of motion design?",
      correctAnswer: "Enhance user experience through movement",
      explanation: "Motion design improves UX."
    }
  ],
  "Cypress End-to-End Testing": [
    {
      type: "multiple-choice",
      question: "What is Cypress primarily used for?",
      options: ["End-to-end testing", "Unit testing", "API development", "UI design"],
      correctAnswer: "End-to-end testing",
      explanation: "Cypress is an E2E testing framework."
    },
    {
      type: "multiple-choice",
      question: "Which language is used to write Cypress tests?",
      options: ["JavaScript", "Python", "Java", "Ruby"],
      correctAnswer: "JavaScript",
      explanation: "Cypress tests are written in JavaScript."
    },
    {
      type: "multiple-choice",
      question: "Which command runs Cypress in interactive mode?",
      options: ["cypress open", "cypress run", "cypress test", "cypress start"],
      correctAnswer: "cypress open",
      explanation: "'cypress open' launches the interactive runner."
    },
    {
      type: "multiple-choice",
      question: "What is a 'fixture' in Cypress?",
      options: ["Test data file", "UI component", "Network request", "Browser window"],
      correctAnswer: "Test data file",
      explanation: "Fixtures provide test data."
    },
    {
      type: "true-false",
      question: "Cypress can test APIs as well as UIs.",
      correctAnswer: true,
      explanation: "Cypress supports API testing."
    },
    {
      type: "true-false",
      question: "Cypress tests run in a real browser.",
      correctAnswer: true,
      explanation: "Tests run in Chrome, Edge, and Electron."
    },
    {
      type: "true-false",
      question: "Cypress supports parallel test execution.",
      correctAnswer: true,
      explanation: "Parallelization is supported in Cypress Dashboard."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of Cypress's automatic waiting?",
      correctAnswer: "Reduces need for manual waits in tests",
      explanation: "Cypress waits for elements automatically."
    },
    {
      type: "short-answer",
      question: "Name a Cypress command for interacting with elements.",
      correctAnswer: "cy.get, cy.click, or cy.type",
      explanation: "These commands interact with DOM elements."
    },
    {
      type: "multiple-choice",
      question: "Which Cypress command is used to visit a URL?",
      options: ["cy.visit", "cy.go", "cy.open", "cy.load"],
      correctAnswer: "cy.visit",
      explanation: "cy.visit navigates to a URL."
    },
    {
      type: "multiple-choice",
      question: "What is the use of 'cy.intercept'?",
      options: ["Stub network requests", "Click elements", "Type text", "Take screenshots"],
      correctAnswer: "Stub network requests",
      explanation: "cy.intercept stubs or spies on network calls."
    },
    {
      type: "multiple-choice",
      question: "Which assertion library does Cypress use?",
      options: ["Chai", "Jest", "Mocha", "Expect"],
      correctAnswer: "Chai",
      explanation: "Cypress uses Chai for assertions."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of Cypress's time-travel feature?",
      options: ["Debugging test steps visually", "Faster test execution", "Parallelization", "API mocking"],
      correctAnswer: "Debugging test steps visually",
      explanation: "Time-travel lets you see each test step."
    },
    {
      type: "true-false",
      question: "Cypress can take screenshots and record videos of tests.",
      correctAnswer: true,
      explanation: "Screenshots and videos aid debugging."
    },
    {
      type: "true-false",
      question: "Cypress only works with React applications.",
      correctAnswer: false,
      explanation: "Cypress works with any web app."
    },
    {
      type: "short-answer",
      question: "What is the main use of Cypress Dashboard?",
      correctAnswer: "View and manage test runs and results",
      explanation: "Dashboard provides test analytics."
    },
    {
      type: "short-answer",
      question: "How do you run Cypress tests in headless mode?",
      correctAnswer: "cypress run",
      explanation: "'cypress run' executes tests headlessly."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to select elements by data attribute in Cypress?",
      options: ["cy.get('[data-cy=...]')", "cy.data()", "cy.select()", "cy.attr()"],
      correctAnswer: "cy.get('[data-cy=...]')",
      explanation: "Selecting by data attribute is best practice."
    },
    {
      type: "multiple-choice",
      question: "What is the use of 'cy.wait'?",
      options: ["Wait for a period or request", "Click an element", "Type text", "Reload page"],
      correctAnswer: "Wait for a period or request",
      explanation: "cy.wait pauses test execution."
    },
    {
      type: "multiple-choice",
      question: "Which Cypress feature helps with flaky tests?",
      options: ["Retries", "Snapshots", "Mocks", "Fixtures"],
      correctAnswer: "Retries",
      explanation: "Retries help stabilize flaky tests."
    },
    {
      type: "true-false",
      question: "Cypress can test mobile web apps in a desktop browser.",
      correctAnswer: true,
      explanation: "You can set viewport sizes for mobile testing."
    },
    {
      type: "short-answer",
      question: "What is the main goal of end-to-end testing?",
      correctAnswer: "Verify the complete flow of an application works as expected",
      explanation: "E2E tests cover real user scenarios."
    }
  ],
  "Selenium Automation": [
    {
      type: "multiple-choice",
      question: "Which language is NOT officially supported by Selenium WebDriver?",
      options: ["Java", "Python", "Ruby", "Swift"],
      correctAnswer: "Swift",
      explanation: "Selenium officially supports Java, Python, Ruby, C#, and JavaScript."
    },
    {
      type: "multiple-choice",
      question: "Which Selenium component is responsible for automating browser actions?",
      options: ["WebDriver", "Grid", "IDE", "RC"],
      correctAnswer: "WebDriver",
      explanation: "WebDriver is the main automation component."
    },
    {
      type: "multiple-choice",
      question: "What is the main use of Selenium Grid?",
      options: ["Parallel test execution", "UI design", "API testing", "Database migration"],
      correctAnswer: "Parallel test execution",
      explanation: "Grid allows running tests on multiple machines/browsers."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to find an element by its CSS selector in Selenium?",
      options: ["findElement(By.cssSelector())", "findElementById()", "findElementByName()", "findElementByXPath()"],
      correctAnswer: "findElement(By.cssSelector())",
      explanation: "By.cssSelector() locates elements using CSS selectors."
    },
    {
      type: "true-false",
      question: "Selenium WebDriver can interact with JavaScript alerts.",
      correctAnswer: true,
      explanation: "WebDriver can accept, dismiss, and get text from alerts."
    },
    {
      type: "true-false",
      question: "Selenium IDE supports exporting test cases to code.",
      correctAnswer: true,
      explanation: "IDE can export recorded tests to various languages."
    },
    {
      type: "true-false",
      question: "Selenium can automate mobile browsers.",
      correctAnswer: true,
      explanation: "Selenium supports mobile browser automation via Appium."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using explicit waits in Selenium?",
      correctAnswer: "Wait for specific conditions before proceeding",
      explanation: "Explicit waits improve test reliability."
    },
    {
      type: "short-answer",
      question: "Name a Selenium method for switching to a different browser tab or window.",
      correctAnswer: "switchTo().window()",
      explanation: "switchTo().window() changes the context."
    },
    {
      type: "multiple-choice",
      question: "Which exception is thrown when an element is not found in Selenium?",
      options: ["NoSuchElementException", "ElementNotFoundException", "TimeoutException", "NullPointerException"],
      correctAnswer: "NoSuchElementException",
      explanation: "NoSuchElementException is thrown for missing elements."
    },
    {
      type: "multiple-choice",
      question: "What is the use of the Actions class in Selenium?",
      options: ["Simulate complex user gestures", "Take screenshots", "Manage cookies", "Handle alerts"],
      correctAnswer: "Simulate complex user gestures",
      explanation: "Actions class is for drag-and-drop, hover, etc."
    },
    {
      type: "multiple-choice",
      question: "Which method is used to take a screenshot in Selenium WebDriver?",
      options: ["getScreenshotAs()", "captureScreen()", "takeScreenshot()", "saveScreenshot()"],
      correctAnswer: "getScreenshotAs()",
      explanation: "getScreenshotAs() captures screenshots."
    },
    {
      type: "multiple-choice",
      question: "Which locator strategy is the most robust for Selenium tests?",
      options: ["ID", "Class name", "XPath", "Tag name"],
      correctAnswer: "ID",
      explanation: "ID is unique and least likely to change."
    },
    {
      type: "true-false",
      question: "Selenium WebDriver can execute JavaScript code in the browser.",
      correctAnswer: true,
      explanation: "executeScript() runs JavaScript in the browser."
    },
    {
      type: "true-false",
      question: "Implicit waits are recommended for all Selenium tests.",
      correctAnswer: false,
      explanation: "Explicit waits are generally preferred."
    },
    {
      type: "short-answer",
      question: "What is the main challenge with using XPath locators?",
      correctAnswer: "They can be brittle and break with DOM changes",
      explanation: "XPath is powerful but sensitive to structure changes."
    },
    {
      type: "short-answer",
      question: "How do you maximize a browser window in Selenium?",
      correctAnswer: "driver.manage().window().maximize()",
      explanation: "This method maximizes the window."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used with Selenium for test reporting?",
      options: ["TestNG", "Webpack", "Redux", "Jest"],
      correctAnswer: "TestNG",
      explanation: "TestNG is popular for test reporting."
    },
    {
      type: "multiple-choice",
      question: "What is the use of DesiredCapabilities in Selenium?",
      options: ["Set browser properties", "Take screenshots", "Handle cookies", "Manage alerts"],
      correctAnswer: "Set browser properties",
      explanation: "DesiredCapabilities configures browser settings."
    },
    {
      type: "multiple-choice",
      question: "Which Selenium method is used to select a value from a dropdown?",
      options: ["selectByVisibleText()", "chooseOption()", "pickValue()", "setDropdown()"],
      correctAnswer: "selectByVisibleText()",
      explanation: "selectByVisibleText() selects dropdown options."
    },
    {
      type: "true-false",
      question: "Selenium can be integrated with CI/CD pipelines.",
      correctAnswer: true,
      explanation: "Selenium is often used in CI/CD workflows."
    },
    {
      type: "short-answer",
      question: "What is the main goal of Selenium automation?",
      correctAnswer: "Automate browser actions for testing web applications",
      explanation: "Selenium automates browser-based tests."
    }
  ],
  "Test-Driven Development": [
    {
      type: "multiple-choice",
      question: "What is the first step in the TDD cycle?",
      options: ["Write a failing test", "Write production code", "Refactor code", "Deploy to production"],
      correctAnswer: "Write a failing test",
      explanation: "TDD starts with a failing test."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a benefit of TDD?",
      options: ["Faster debugging", "Better code coverage", "Slower feedback", "Improved design"],
      correctAnswer: "Slower feedback",
      explanation: "TDD provides faster feedback, not slower."
    },
    {
      type: "multiple-choice",
      question: "What does 'Red-Green-Refactor' mean in TDD?",
      options: ["Fail, pass, improve", "Write, test, deploy", "Debug, fix, refactor", "Design, code, test"],
      correctAnswer: "Fail, pass, improve",
      explanation: "Red-Green-Refactor is the TDD cycle."
    },
    {
      type: "multiple-choice",
      question: "Which testing framework is commonly used for TDD in JavaScript?",
      options: ["Jest", "Webpack", "Redux", "Sass"],
      correctAnswer: "Jest",
      explanation: "Jest is popular for TDD in JS."
    },
    {
      type: "true-false",
      question: "TDD can help reduce bugs in production.",
      correctAnswer: true,
      explanation: "TDD leads to more reliable code."
    },
    {
      type: "true-false",
      question: "You should write production code before writing tests in TDD.",
      correctAnswer: false,
      explanation: "Tests come first in TDD."
    },
    {
      type: "true-false",
      question: "TDD is only useful for backend development.",
      correctAnswer: false,
      explanation: "TDD is valuable for frontend and backend."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of refactoring in TDD?",
      correctAnswer: "Improve code without changing behavior",
      explanation: "Refactoring cleans up code after tests pass."
    },
    {
      type: "short-answer",
      question: "Name a common pitfall when practicing TDD.",
      correctAnswer: "Writing overly complex tests or skipping refactoring",
      explanation: "These are common TDD mistakes."
    },
    {
      type: "multiple-choice",
      question: "Which principle is closely related to TDD?",
      options: ["YAGNI", "DRY", "KISS", "SOLID"],
      correctAnswer: "YAGNI",
      explanation: "You Aren't Gonna Need It aligns with TDD's minimalism."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of writing tests first?",
      options: ["Clarifies requirements", "Slows development", "Increases bugs", "Reduces code quality"],
      correctAnswer: "Clarifies requirements",
      explanation: "Tests clarify what code should do."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a TDD anti-pattern?",
      options: ["Testing implementation details", "Skipping refactoring", "Writing tests after code", "Writing small, focused tests"],
      correctAnswer: "Writing small, focused tests",
      explanation: "Small, focused tests are a best practice."
    },
    {
      type: "multiple-choice",
      question: "What is the role of mocking in TDD?",
      options: ["Isolate units under test", "Increase test flakiness", "Slow down tests", "Reduce code coverage"],
      correctAnswer: "Isolate units under test",
      explanation: "Mocking isolates dependencies."
    },
    {
      type: "true-false",
      question: "TDD can lead to over-testing if not practiced carefully.",
      correctAnswer: true,
      explanation: "Over-testing is a risk in TDD."
    },
    {
      type: "true-false",
      question: "TDD guarantees bug-free software.",
      correctAnswer: false,
      explanation: "TDD reduces but does not eliminate bugs."
    },
    {
      type: "short-answer",
      question: "What is the main challenge of TDD in legacy codebases?",
      correctAnswer: "Difficult to add tests without refactoring",
      explanation: "Legacy code may not be testable."
    },
    {
      type: "short-answer",
      question: "How does TDD support continuous integration?",
      correctAnswer: "By ensuring all code is tested before merging",
      explanation: "TDD fits well with CI pipelines."
    },
    {
      type: "multiple-choice",
      question: "Which is NOT a step in the TDD cycle?",
      options: ["Write a failing test", "Write production code", "Deploy to production", "Refactor code"],
      correctAnswer: "Deploy to production",
      explanation: "Deployment is not part of the TDD cycle."
    },
    {
      type: "multiple-choice",
      question: "What is the main goal of TDD?",
      options: ["Write reliable, maintainable code", "Increase code complexity", "Reduce test coverage", "Delay feedback"],
      correctAnswer: "Write reliable, maintainable code",
      explanation: "TDD aims for reliability and maintainability."
    },
    {
      type: "multiple-choice",
      question: "Which tool is commonly used for TDD in Python?",
      options: ["pytest", "webpack", "redux", "sass"],
      correctAnswer: "pytest",
      explanation: "pytest is popular for TDD in Python."
    },
    {
      type: "true-false",
      question: "TDD can improve code design and architecture.",
      correctAnswer: true,
      explanation: "TDD encourages better design."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of TDD for teams?",
      correctAnswer: "Shared understanding of requirements and code quality",
      explanation: "TDD helps teams align on goals."
    }
  ],
  "Playwright for Modern Web Testing": [
    {
      type: "multiple-choice",
      question: "Which company develops Playwright?",
      options: ["Microsoft", "Google", "Facebook", "Mozilla"],
      correctAnswer: "Microsoft",
      explanation: "Microsoft is the creator of Playwright."
    },
    {
      type: "multiple-choice",
      question: "Which languages are supported by Playwright?",
      options: ["JavaScript, Python, C#, Java", "Ruby, PHP, Go", "Swift, Kotlin, Dart", "Only JavaScript"],
      correctAnswer: "JavaScript, Python, C#, Java",
      explanation: "Playwright supports multiple languages."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of Playwright over Selenium?",
      options: ["Cross-browser automation", "No code required", "Only works with Chrome", "No support for mobile"],
      correctAnswer: "Cross-browser automation",
      explanation: "Playwright supports Chromium, Firefox, and WebKit."
    },
    {
      type: "multiple-choice",
      question: "Which Playwright method is used to launch a browser?",
      options: ["playwright.chromium.launch()", "browser.open()", "launchBrowser()", "start()"],
      correctAnswer: "playwright.chromium.launch()",
      explanation: "This method launches a Chromium browser."
    },
    {
      type: "true-false",
      question: "Playwright can automate mobile browsers.",
      correctAnswer: true,
      explanation: "Playwright supports mobile emulation."
    },
    {
      type: "true-false",
      question: "Playwright tests can run in parallel.",
      correctAnswer: true,
      explanation: "Parallel test execution is supported."
    },
    {
      type: "true-false",
      question: "Playwright only supports Chromium-based browsers.",
      correctAnswer: false,
      explanation: "It also supports Firefox and WebKit."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of Playwright's auto-wait feature?",
      correctAnswer: "Reduces flakiness by waiting for elements automatically",
      explanation: "Auto-wait improves test reliability."
    },
    {
      type: "short-answer",
      question: "Name a Playwright method for taking screenshots.",
      correctAnswer: "page.screenshot()",
      explanation: "page.screenshot() captures screenshots."
    },
    {
      type: "multiple-choice",
      question: "Which Playwright method is used to interact with elements?",
      options: ["page.click()", "browser.click()", "element.click()", "test.click()"],
      correctAnswer: "page.click()",
      explanation: "page.click() interacts with elements."
    },
    {
      type: "multiple-choice",
      question: "What is the use of the 'expect' assertion in Playwright?",
      options: ["Verify test outcomes", "Launch browsers", "Record videos", "Take screenshots"],
      correctAnswer: "Verify test outcomes",
      explanation: "'expect' is used for assertions."
    },
    {
      type: "multiple-choice",
      question: "Which Playwright feature helps with network request mocking?",
      options: ["page.route()", "page.mock()", "browser.route()", "test.mock()"],
      correctAnswer: "page.route()",
      explanation: "page.route() intercepts and mocks requests."
    },
    {
      type: "multiple-choice",
      question: "What is the main advantage of using Playwright Test Runner?",
      options: ["Built-in parallelization and reporting", "No code required", "Only works with Chromium", "No support for CI"],
      correctAnswer: "Built-in parallelization and reporting",
      explanation: "Playwright Test Runner has advanced features."
    },
    {
      type: "true-false",
      question: "Playwright can record videos of test runs.",
      correctAnswer: true,
      explanation: "Video recording is supported."
    },
    {
      type: "true-false",
      question: "Playwright tests can be run headlessly.",
      correctAnswer: true,
      explanation: "Headless mode is supported."
    },
    {
      type: "short-answer",
      question: "What is the main challenge of cross-browser testing?",
      correctAnswer: "Ensuring consistent behavior across browsers",
      explanation: "Different browsers may behave differently."
    },
    {
      type: "short-answer",
      question: "How do you run Playwright tests in parallel?",
      correctAnswer: "Using the --parallel flag or test runner config",
      explanation: "Parallelization is built-in."
    },
    {
      type: "multiple-choice",
      question: "Which Playwright method is used to emulate devices?",
      options: ["browser.newContext({ ... })", "page.emulate()", "test.device()", "context.emulate()"],
      correctAnswer: "browser.newContext({ ... })",
      explanation: "newContext() can emulate devices."
    },
    {
      type: "multiple-choice",
      question: "What is the use of 'page.waitForSelector()' in Playwright?",
      options: ["Wait for an element to appear", "Click an element", "Take a screenshot", "Launch a browser"],
      correctAnswer: "Wait for an element to appear",
      explanation: "waitForSelector waits for elements."
    },
    {
      type: "multiple-choice",
      question: "Which assertion library is used by default in Playwright Test?",
      options: ["Expect", "Chai", "Jest", "Mocha"],
      correctAnswer: "Expect",
      explanation: "Playwright Test uses expect for assertions."
    },
    {
      type: "true-false",
      question: "Playwright can be integrated with CI/CD pipelines.",
      correctAnswer: true,
      explanation: "Playwright is CI/CD friendly."
    },
    {
      type: "short-answer",
      question: "What is the main goal of Playwright testing?",
      correctAnswer: "Automate and verify web application behavior across browsers",
      explanation: "Playwright ensures cross-browser reliability."
    }
  ],
  "Agile & Scrum Basics": [
      {
        type: "multiple-choice",
        question: "Which role is responsible for maximizing the value of the product in Scrum?",
        options: ["Product Owner", "Scrum Master", "Development Team", "Stakeholder"],
        correctAnswer: "Product Owner",
        explanation: "The Product Owner maximizes product value."
      },
      {
        type: "multiple-choice",
        question: "What is the recommended duration of a Scrum sprint?",
        options: ["1-4 weeks", "1 day", "6 months", "1 year"],
        correctAnswer: "1-4 weeks",
        explanation: "Sprints are typically 1-4 weeks long."
      },
      {
        type: "multiple-choice",
        question: "Which artifact provides transparency about the work to be done in Scrum?",
        options: ["Product Backlog", "Sprint Review", "Daily Scrum", "Retrospective"],
        correctAnswer: "Product Backlog",
        explanation: "The Product Backlog lists all work items."
      },
      {
        type: "multiple-choice",
        question: "What is the main purpose of a Sprint Retrospective?",
        options: ["Inspect and adapt the process", "Deliver product increments", "Plan the next sprint", "Estimate backlog items"],
        correctAnswer: "Inspect and adapt the process",
        explanation: "Retrospectives improve team processes."
      },
      {
        type: "true-false",
        question: "Scrum Master is responsible for removing impediments.",
        correctAnswer: true,
        explanation: "Scrum Master helps the team by removing obstacles."
      },
      {
        type: "true-false",
        question: "The Product Owner writes all user stories.",
        correctAnswer: false,
        explanation: "Anyone can write user stories, but the Product Owner prioritizes them."
      },
      {
        type: "true-false",
        question: "Scrum teams are cross-functional.",
        correctAnswer: true,
        explanation: "Scrum teams have all skills needed to deliver increments."
      },
      {
        type: "short-answer",
        question: "What is the main goal of a Daily Scrum?",
        correctAnswer: "Synchronize activities and plan for the next 24 hours",
        explanation: "Daily Scrum aligns the team."
      },
      {
        type: "short-answer",
        question: "Name a Scrum event focused on inspecting the product increment.",
        correctAnswer: "Sprint Review",
        explanation: "Sprint Review inspects the increment."
      },
      {
        type: "multiple-choice",
        question: "Which metric measures the amount of work a team completes in a sprint?",
        options: ["Velocity", "Burndown", "Lead Time", "Cycle Time"],
        correctAnswer: "Velocity",
        explanation: "Velocity is the amount of work completed per sprint."
      },
      {
        type: "multiple-choice",
        question: "What is a user story?",
        options: ["A short description of a feature from the user's perspective", "A bug report", "A test case", "A technical task"],
        correctAnswer: "A short description of a feature from the user's perspective",
        explanation: "User stories describe features from the user's view."
      },
      {
        type: "multiple-choice",
        question: "Which Agile principle emphasizes regular delivery of working software?",
        options: ["Deliver working software frequently", "Comprehensive documentation", "Contract negotiation", "Following a plan"],
        correctAnswer: "Deliver working software frequently",
        explanation: "Frequent delivery is a core Agile principle."
      },
      {
        type: "multiple-choice",
        question: "What is the main responsibility of the Scrum Master?",
        options: ["Facilitate Scrum events", "Write code", "Approve budgets", "Deploy software"],
        correctAnswer: "Facilitate Scrum events",
        explanation: "Scrum Master facilitates and coaches the team."
      },
      {
        type: "true-false",
        question: "Agile teams welcome changing requirements, even late in development.",
        correctAnswer: true,
        explanation: "Responding to change is a key Agile value."
      },
      {
        type: "true-false",
        question: "Scrum prescribes specific engineering practices.",
        correctAnswer: false,
        explanation: "Scrum is a framework, not a methodology."
      },
      {
        type: "short-answer",
        question: "What is a product increment?",
        correctAnswer: "A potentially shippable piece of software",
        explanation: "Each increment adds value."
      },
      {
        type: "short-answer",
        question: "Name a tool commonly used for Agile project management.",
        correctAnswer: "Jira, Trello, or Azure Boards",
        explanation: "These tools help manage Agile projects."
      },
      {
        type: "multiple-choice",
        question: "Which Scrum event is time-boxed to one month or less?",
        options: ["Sprint", "Daily Scrum", "Sprint Review", "Retrospective"],
        correctAnswer: "Sprint",
        explanation: "Sprints are time-boxed to one month or less."
      },
      {
        type: "multiple-choice",
        question: "What is a burndown chart used for?",
        options: ["Track remaining work", "Show team velocity", "List user stories", "Plan releases"],
        correctAnswer: "Track remaining work",
        explanation: "Burndown charts visualize remaining work."
      },
      {
        type: "multiple-choice",
        question: "Which Agile framework uses Kanban boards?",
        options: ["Kanban", "Scrum", "XP", "SAFe"],
        correctAnswer: "Kanban",
        explanation: "Kanban boards visualize workflow."
      },
      {
        type: "true-false",
        question: "Scrum teams should be self-organizing.",
        correctAnswer: true,
        explanation: "Self-organization is a Scrum value."
      },
      {
        type: "short-answer",
        question: "What is the main benefit of Agile retrospectives?",
        correctAnswer: "Continuous improvement",
        explanation: "Retrospectives drive improvement."
      }
  ],
  "Git & Version Control": [
    {
      type: "multiple-choice",
      question: "Which command initializes a new Git repository?",
      options: ["git init", "git start", "git new", "git create"],
      correctAnswer: "git init",
      explanation: "'git init' creates a new repository."
    },
    {
      type: "multiple-choice",
      question: "Which command stages all changes for commit?",
      options: ["git add .", "git stage", "git commit -a", "git push"],
      correctAnswer: "git add .",
      explanation: "'git add .' stages all changes."
    },
    {
      type: "multiple-choice",
      question: "What does 'git clone' do?",
      options: ["Copies a remote repository", "Deletes a repository", "Creates a branch", "Merges branches"],
      correctAnswer: "Copies a remote repository",
      explanation: "'git clone' copies a repo locally."
    },
    {
      type: "multiple-choice",
      question: "Which command shows the commit history?",
      options: ["git log", "git status", "git history", "git commits"],
      correctAnswer: "git log",
      explanation: "'git log' displays commit history."
    },
    {
      type: "true-false",
      question: "Git is a distributed version control system.",
      correctAnswer: true,
      explanation: "Git is distributed."
    },
    {
      type: "true-false",
      question: "A Git branch is a separate line of development.",
      correctAnswer: true,
      explanation: "Branches allow parallel development."
    },
    {
      type: "true-false",
      question: "'git merge' always results in a fast-forward merge.",
      correctAnswer: false,
      explanation: "Merges can be fast-forward or create merge commits."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of 'git pull'?",
      correctAnswer: "Fetch and merge changes from remote",
      explanation: "'git pull' updates your branch."
    },
    {
      type: "short-answer",
      question: "Name a command to resolve merge conflicts.",
      correctAnswer: "git mergetool or manual editing",
      explanation: "These help resolve conflicts."
    },
    {
      type: "multiple-choice",
      question: "Which file tells Git which files to ignore?",
      options: [".gitignore", ".gitconfig", "README.md", "config.json"],
      correctAnswer: ".gitignore",
      explanation: ".gitignore lists ignored files."
    },
    {
      type: "multiple-choice",
      question: "What does 'git checkout' do?",
      options: ["Switches branches or restores files", "Deletes a branch", "Commits changes", "Pushes to remote"],
      correctAnswer: "Switches branches or restores files",
      explanation: "'git checkout' switches or restores."
    },
    {
      type: "multiple-choice",
      question: "Which command creates a new branch?",
      options: ["git branch <name>", "git new-branch <name>", "git create <name>", "git checkout <name>"],
      correctAnswer: "git branch <name>",
      explanation: "'git branch' creates a branch."
    },
    {
      type: "multiple-choice",
      question: "What is a merge conflict?",
      options: ["When changes in two branches overlap", "A failed commit", "A deleted branch", "A push error"],
      correctAnswer: "When changes in two branches overlap",
      explanation: "Conflicts occur when changes overlap."
    },
    {
      type: "true-false",
      question: "'git push' uploads local commits to a remote repository.",
      correctAnswer: true,
      explanation: "'git push' sends commits to remote."
    },
    {
      type: "true-false",
      question: "Git tracks file permissions by default.",
      correctAnswer: false,
      explanation: "Git does not track all file permissions."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of branching in Git?",
      correctAnswer: "Parallel development and experimentation",
      explanation: "Branching enables parallel work."
    },
    {
      type: "short-answer",
      question: "Name a command to stash changes in Git.",
      correctAnswer: "git stash",
      explanation: "'git stash' saves changes temporarily."
    },
    {
      type: "multiple-choice",
      question: "Which command deletes a branch in Git?",
      options: ["git branch -d <name>", "git delete <name>", "git remove <name>", "git drop <name>"],
      correctAnswer: "git branch -d <name>",
      explanation: "'git branch -d' deletes a branch."
    },
    {
      type: "multiple-choice",
      question: "What is the use of 'git rebase'?",
      options: ["Integrate changes from one branch to another", "Delete a branch", "Create a tag", "Clone a repository"],
      correctAnswer: "Integrate changes from one branch to another",
      explanation: "Rebase integrates changes."
    },
    {
      type: "multiple-choice",
      question: "Which command shows the current status of the working directory?",
      options: ["git status", "git log", "git diff", "git show"],
      correctAnswer: "git status",
      explanation: "'git status' shows current state."
    },
    {
      type: "true-false",
      question: "Git can be used for collaborative development.",
      correctAnswer: true,
      explanation: "Git is designed for collaboration."
    },
    {
      type: "short-answer",
      question: "What is the main goal of version control?",
      correctAnswer: "Track and manage changes to code over time",
      explanation: "Version control manages code changes."
    }
  ],
  "Technical Writing": [
    {
      type: "multiple-choice",
      question: "What is the primary goal of technical writing?",
      options: ["Communicate complex information clearly", "Entertain readers", "Sell products", "Write fiction"],
      correctAnswer: "Communicate complex information clearly",
      explanation: "Technical writing aims for clarity."
    },
    {
      type: "multiple-choice",
      question: "Which document is used to describe how to use a software product?",
      options: ["User manual", "Release notes", "API reference", "White paper"],
      correctAnswer: "User manual",
      explanation: "User manuals guide users."
    },
    {
      type: "multiple-choice",
      question: "What is a persona in technical writing?",
      options: ["A representation of a typical user", "A fictional character", "A marketing term", "A software tool"],
      correctAnswer: "A representation of a typical user",
      explanation: "Personas represent user types."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a best practice in technical writing?",
      options: ["Use jargon without explanation", "Be concise", "Use active voice", "Organize content logically"],
      correctAnswer: "Use jargon without explanation",
      explanation: "Jargon should be explained or avoided."
    },
    {
      type: "true-false",
      question: "Technical writers should consider the audience's background knowledge.",
      correctAnswer: true,
      explanation: "Audience analysis is key."
    },
    {
      type: "true-false",
      question: "Graphics and diagrams can enhance technical documents.",
      correctAnswer: true,
      explanation: "Visuals aid understanding."
    },
    {
      type: "true-false",
      question: "Technical writing is only for software documentation.",
      correctAnswer: false,
      explanation: "It covers many fields, not just software."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of an API reference?",
      correctAnswer: "Document functions, classes, and endpoints for developers",
      explanation: "API references help developers use software."
    },
    {
      type: "short-answer",
      question: "Name a tool commonly used for technical writing.",
      correctAnswer: "Markdown, DITA, or Sphinx",
      explanation: "These tools are popular for documentation."
    },
    {
      type: "multiple-choice",
      question: "Which section is typically found at the start of a technical document?",
      options: ["Introduction", "Appendix", "Glossary", "References"],
      correctAnswer: "Introduction",
      explanation: "Introductions set the context."
    },
    {
      type: "multiple-choice",
      question: "What is the use of a glossary in technical writing?",
      options: ["Define terms", "List references", "Summarize content", "Provide images"],
      correctAnswer: "Define terms",
      explanation: "Glossaries define technical terms."
    },
    {
      type: "multiple-choice",
      question: "Which writing style is preferred in technical documents?",
      options: ["Active voice", "Passive voice", "First person", "Second person"],
      correctAnswer: "Active voice",
      explanation: "Active voice is clearer."
    },
    {
      type: "multiple-choice",
      question: "What is a release note?",
      options: ["A document describing new features and fixes", "A user manual", "A test case", "A marketing brochure"],
      correctAnswer: "A document describing new features and fixes",
      explanation: "Release notes summarize changes."
    },
    {
      type: "true-false",
      question: "Technical documents should be updated regularly.",
      correctAnswer: true,
      explanation: "Documentation should stay current."
    },
    {
      type: "true-false",
      question: "Proofreading is not necessary for technical writing.",
      correctAnswer: false,
      explanation: "Proofreading ensures accuracy."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using templates in technical writing?",
      correctAnswer: "Consistency and efficiency",
      explanation: "Templates standardize documents."
    },
    {
      type: "short-answer",
      question: "Name a common type of technical document.",
      correctAnswer: "User guide, API reference, or release note",
      explanation: "These are common document types."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for collaborative documentation?",
      options: ["Confluence", "Photoshop", "Excel", "Slack"],
      correctAnswer: "Confluence",
      explanation: "Confluence is for collaborative docs."
    },
    {
      type: "multiple-choice",
      question: "What is the use of version control in documentation?",
      options: ["Track changes and collaborate", "Format text", "Add images", "Translate content"],
      correctAnswer: "Track changes and collaborate",
      explanation: "Version control manages document changes."
    },
    {
      type: "multiple-choice",
      question: "Which is NOT a key quality of good technical writing?",
      options: ["Ambiguity", "Clarity", "Accuracy", "Conciseness"],
      correctAnswer: "Ambiguity",
      explanation: "Good writing avoids ambiguity."
    },
    {
      type: "true-false",
      question: "Technical writing can include tutorials and how-to guides.",
      correctAnswer: true,
      explanation: "Tutorials are a form of technical writing."
    },
    {
      type: "short-answer",
      question: "What is the main goal of technical writing?",
      correctAnswer: "Communicate technical information clearly and effectively",
      explanation: "Clarity and effectiveness are key."
    }
  ],
  "Cybersecurity Essentials": [
    {
      type: "multiple-choice",
      question: "Which type of attack involves tricking users into revealing confidential information?",
      options: ["Phishing", "DDoS", "SQL Injection", "Man-in-the-middle"],
      correctAnswer: "Phishing",
      explanation: "Phishing tricks users into giving up sensitive data."
    },
    {
      type: "multiple-choice",
      question: "What does the CIA triad stand for in cybersecurity?",
      options: ["Confidentiality, Integrity, Availability", "Control, Inspection, Authentication", "Cryptography, Internet, Access", "Compliance, Investigation, Analysis"],
      correctAnswer: "Confidentiality, Integrity, Availability",
      explanation: "CIA triad is a core security model."
    },
    {
      type: "multiple-choice",
      question: "Which protocol is used to securely transfer files over the Internet?",
      options: ["SFTP", "FTP", "SMTP", "HTTP"],
      correctAnswer: "SFTP",
      explanation: "SFTP is secure, FTP is not."
    },
    {
      type: "multiple-choice",
      question: "What is a zero-day vulnerability?",
      options: ["A flaw unknown to the vendor", "A virus", "A firewall rule", "A backup method"],
      correctAnswer: "A flaw unknown to the vendor",
      explanation: "Zero-day is exploited before a fix is available."
    },
    {
      type: "true-false",
      question: "Multi-factor authentication increases security.",
      correctAnswer: true,
      explanation: "MFA adds extra layers of security."
    },
    {
      type: "true-false",
      question: "Antivirus software can detect all malware.",
      correctAnswer: false,
      explanation: "No antivirus is perfect."
    },
    {
      type: "true-false",
      question: "Encryption protects data confidentiality.",
      correctAnswer: true,
      explanation: "Encryption keeps data private."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of a firewall?",
      correctAnswer: "To block unauthorized access to a network",
      explanation: "Firewalls filter network traffic."
    },
    {
      type: "short-answer",
      question: "Name a common form of social engineering attack.",
      correctAnswer: "Phishing, pretexting, or baiting",
      explanation: "These are social engineering methods."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a strong password practice?",
      options: ["Using common words", "Using symbols", "Using numbers", "Using uppercase and lowercase letters"],
      correctAnswer: "Using common words",
      explanation: "Common words are easy to guess."
    },
    {
      type: "multiple-choice",
      question: "What is the purpose of penetration testing?",
      options: ["Identify security weaknesses", "Install software", "Backup data", "Monitor performance"],
      correctAnswer: "Identify security weaknesses",
      explanation: "Pen testing finds vulnerabilities."
    },
    {
      type: "multiple-choice",
      question: "Which type of malware demands payment to restore access?",
      options: ["Ransomware", "Spyware", "Adware", "Rootkit"],
      correctAnswer: "Ransomware",
      explanation: "Ransomware encrypts files and demands payment."
    },
    {
      type: "multiple-choice",
      question: "What is the main risk of using public Wi-Fi?",
      options: ["Man-in-the-middle attacks", "Faster speeds", "Better coverage", "Lower latency"],
      correctAnswer: "Man-in-the-middle attacks",
      explanation: "Public Wi-Fi is vulnerable to interception."
    },
    {
      type: "true-false",
      question: "Regular software updates can reduce security risks.",
      correctAnswer: true,
      explanation: "Updates patch vulnerabilities."
    },
    {
      type: "true-false",
      question: "All SSL certificates are equally secure.",
      correctAnswer: false,
      explanation: "Certificate types and validation levels vary."
    },
    {
      type: "short-answer",
      question: "What is the main goal of incident response?",
      correctAnswer: "To contain and recover from security breaches",
      explanation: "Incident response limits damage."
    },
    {
      type: "short-answer",
      question: "Name a tool used for network security monitoring.",
      correctAnswer: "Wireshark, Snort, or Zeek",
      explanation: "These tools monitor network traffic."
    },
    {
      type: "multiple-choice",
      question: "Which regulation focuses on data protection in the EU?",
      options: ["GDPR", "HIPAA", "PCI DSS", "SOX"],
      correctAnswer: "GDPR",
      explanation: "GDPR is the EU's data protection law."
    },
    {
      type: "multiple-choice",
      question: "What is the use of hashing in cybersecurity?",
      options: ["Verify data integrity", "Encrypt data", "Compress files", "Backup data"],
      correctAnswer: "Verify data integrity",
      explanation: "Hashing checks if data has changed."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a common sign of a phishing email?",
      options: ["Urgent requests for information", "Personalized greeting", "Proper grammar", "Known sender address"],
      correctAnswer: "Urgent requests for information",
      explanation: "Phishing emails often create urgency."
    },
    {
      type: "true-false",
      question: "Cybersecurity is only the responsibility of IT staff.",
      correctAnswer: false,
      explanation: "Everyone is responsible for security."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using a VPN?",
      correctAnswer: "Encrypts internet traffic and hides IP address",
      explanation: "VPNs provide privacy and security."
    }
  ],
  "Interview Preparation": [
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a good interview practice?",
      options: ["Arriving late", "Researching the company", "Preparing questions", "Dressing appropriately"],
      correctAnswer: "Arriving late",
      explanation: "Punctuality is important."
    },
    {
      type: "multiple-choice",
      question: "What is the STAR method used for?",
      options: ["Answering behavioral questions", "Writing code", "Negotiating salary", "Scheduling interviews"],
      correctAnswer: "Answering behavioral questions",
      explanation: "STAR stands for Situation, Task, Action, Result."
    },
    {
      type: "multiple-choice",
      question: "Which question is illegal for employers to ask in many countries?",
      options: ["Marital status", "Work experience", "Technical skills", "Education"],
      correctAnswer: "Marital status",
      explanation: "Personal questions are often illegal."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a technical interview?",
      options: ["Assess job-related skills", "Discuss hobbies", "Negotiate salary", "Review company policies"],
      correctAnswer: "Assess job-related skills",
      explanation: "Technical interviews test relevant skills."
    },
    {
      type: "true-false",
      question: "It's important to prepare questions for the interviewer.",
      correctAnswer: true,
      explanation: "Asking questions shows interest."
    },
    {
      type: "true-false",
      question: "You should memorize answers to all possible questions.",
      correctAnswer: false,
      explanation: "Memorization can sound unnatural."
    },
    {
      type: "true-false",
      question: "Body language can impact interview outcomes.",
      correctAnswer: true,
      explanation: "Non-verbal cues matter."
    },
    {
      type: "short-answer",
      question: "What is the main goal of a resume?",
      correctAnswer: "Summarize qualifications and experience",
      explanation: "Resumes highlight your fit for the job."
    },
    {
      type: "short-answer",
      question: "Name a common type of technical interview question.",
      correctAnswer: "Coding, system design, or behavioral",
      explanation: "These are common interview types."
    },
    {
      type: "multiple-choice",
      question: "Which is a good way to handle a question you don't know?",
      options: ["Admit you don't know and explain your approach", "Guess randomly", "Stay silent", "Change the subject"],
      correctAnswer: "Admit you don't know and explain your approach",
      explanation: "Honesty and reasoning are valued."
    },
    {
      type: "multiple-choice",
      question: "What is the benefit of mock interviews?",
      options: ["Practice and reduce anxiety", "Guarantee a job", "Replace real interviews", "Skip preparation"],
      correctAnswer: "Practice and reduce anxiety",
      explanation: "Mock interviews help you prepare."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT recommended for virtual interviews?",
      options: ["Test your technology", "Dress professionally", "Ignore your background", "Find a quiet space"],
      correctAnswer: "Ignore your background",
      explanation: "Backgrounds should be tidy and professional."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a cover letter?",
      options: ["Introduce yourself and explain your fit", "List all jobs", "Provide references", "Negotiate salary"],
      correctAnswer: "Introduce yourself and explain your fit",
      explanation: "Cover letters introduce and explain your value."
    },
    {
      type: "true-false",
      question: "It's okay to ask about company culture during an interview.",
      correctAnswer: true,
      explanation: "Culture fit is important."
    },
    {
      type: "true-false",
      question: "You should never follow up after an interview.",
      correctAnswer: false,
      explanation: "Follow-ups show professionalism."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of networking for job seekers?",
      correctAnswer: "Access to opportunities and referrals",
      explanation: "Networking opens doors."
    },
    {
      type: "short-answer",
      question: "Name a resource for practicing coding interviews.",
      correctAnswer: "LeetCode, HackerRank, or CodeSignal",
      explanation: "These are popular practice sites."
    },
    {
      type: "multiple-choice",
      question: "Which is a sign of a good company to work for?",
      options: ["Clear career growth paths", "High turnover", "Lack of feedback", "Unclear mission"],
      correctAnswer: "Clear career growth paths",
      explanation: "Growth opportunities are a good sign."
    },
    {
      type: "multiple-choice",
      question: "What is the STAR method's 'R' stand for?",
      options: ["Result", "Reason", "Review", "Response"],
      correctAnswer: "Result",
      explanation: "STAR: Situation, Task, Action, Result."
    },
    {
      type: "multiple-choice",
      question: "What is the main goal of a phone screen interview?",
      options: ["Initial assessment of fit", "Final job offer", "Salary negotiation", "Onboarding"],
      correctAnswer: "Initial assessment of fit",
      explanation: "Phone screens are for initial evaluation."
    },
    {
      type: "true-false",
      question: "Interviewers may ask about your problem-solving process.",
      correctAnswer: true,
      explanation: "Process is as important as the answer."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of a portfolio for creative roles?",
      correctAnswer: "Showcase work and skills",
      explanation: "Portfolios demonstrate abilities."
    }
  ],
  "Open Source Contribution": [
    {
      type: "multiple-choice",
      question: "Which platform is most popular for open source collaboration?",
      options: ["GitHub", "Bitbucket", "GitLab", "SourceForge"],
      correctAnswer: "GitHub",
      explanation: "GitHub is the largest open source platform."
    },
    {
      type: "multiple-choice",
      question: "What is a pull request?",
      options: ["A request to merge code changes", "A bug report", "A feature request", "A code review"],
      correctAnswer: "A request to merge code changes",
      explanation: "Pull requests propose code changes."
    },
    {
      type: "multiple-choice",
      question: "Which file typically contains contribution guidelines?",
      options: ["CONTRIBUTING.md", "README.md", "LICENSE", "CODEOWNERS"],
      correctAnswer: "CONTRIBUTING.md",
      explanation: "CONTRIBUTING.md explains how to contribute."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of open source software?",
      options: ["Transparency and collaboration", "Proprietary code", "Hidden bugs", "Limited access"],
      correctAnswer: "Transparency and collaboration",
      explanation: "Open source is open and collaborative."
    },
    {
      type: "true-false",
      question: "Anyone can contribute to open source projects.",
      correctAnswer: true,
      explanation: "Open source is open to all."
    },
    {
      type: "true-false",
      question: "All open source projects require code contributions.",
      correctAnswer: false,
      explanation: "Contributions can include docs, design, and more."
    },
    {
      type: "true-false",
      question: "Maintainers review and approve pull requests.",
      correctAnswer: true,
      explanation: "Maintainers manage project contributions."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of a LICENSE file?",
      correctAnswer: "Specify terms for using and distributing the code",
      explanation: "LICENSE files define legal terms."
    },
    {
      type: "short-answer",
      question: "Name a way to contribute to open source without writing code.",
      correctAnswer: "Documentation, design, or testing",
      explanation: "Non-code contributions are valuable."
    },
    {
      type: "multiple-choice",
      question: "Which command is used to fork a repository on GitHub?",
      options: ["Click the 'Fork' button", "git fork", "git clone", "git branch"],
      correctAnswer: "Click the 'Fork' button",
      explanation: "Forking is done via the GitHub UI."
    },
    {
      type: "multiple-choice",
      question: "What is an issue tracker used for?",
      options: ["Track bugs and feature requests", "Store passwords", "Manage finances", "Deploy code"],
      correctAnswer: "Track bugs and feature requests",
      explanation: "Issue trackers manage project tasks."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a benefit of contributing to open source?",
      options: ["Learning new skills", "Building reputation", "Getting paid always", "Networking"],
      correctAnswer: "Getting paid always",
      explanation: "Most open source work is unpaid."
    },
    {
      type: "multiple-choice",
      question: "What is a code of conduct?",
      options: ["Guidelines for respectful behavior", "A coding standard", "A test suite", "A license"],
      correctAnswer: "Guidelines for respectful behavior",
      explanation: "Codes of conduct set behavior expectations."
    },
    {
      type: "true-false",
      question: "Open source projects may have documentation-only issues.",
      correctAnswer: true,
      explanation: "Docs are important in open source."
    },
    {
      type: "true-false",
      question: "You must be an expert to contribute to open source.",
      correctAnswer: false,
      explanation: "Beginners are welcome in open source."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of submitting a pull request?",
      correctAnswer: "Propose improvements and get feedback",
      explanation: "Pull requests enable collaboration."
    },
    {
      type: "short-answer",
      question: "Name a platform for finding open source projects to contribute to.",
      correctAnswer: "GitHub, GitLab, or SourceForge",
      explanation: "These platforms host open source projects."
    },
    {
      type: "multiple-choice",
      question: "Which label indicates a good issue for beginners?",
      options: ["good first issue", "critical", "wontfix", "duplicate"],
      correctAnswer: "good first issue",
      explanation: "'good first issue' is for new contributors."
    },
    {
      type: "multiple-choice",
      question: "What is the use of a README file?",
      options: ["Explain project purpose and usage", "Store secrets", "Track bugs", "Compile code"],
      correctAnswer: "Explain project purpose and usage",
      explanation: "README files introduce the project."
    },
    {
      type: "multiple-choice",
      question: "Which is NOT a typical step in contributing to open source?",
      options: ["Ignoring project guidelines", "Forking the repo", "Making changes", "Submitting a pull request"],
      correctAnswer: "Ignoring project guidelines",
      explanation: "Following guidelines is important."
    },
    {
      type: "true-false",
      question: "Open source contributions can help your career.",
      correctAnswer: true,
      explanation: "Contributions build skills and reputation."
    },
    {
      type: "short-answer",
      question: "What is the main goal of open source contribution?",
      correctAnswer: "Collaborate and improve software for everyone",
      explanation: "Open source is about collaboration."
    }
  ],
  "Remote Team Collaboration": [
    {
      type: "multiple-choice",
      question: "Which tool is commonly used for real-time team communication in remote work?",
      options: ["Slack", "Photoshop", "Excel", "Premiere Pro"],
      correctAnswer: "Slack",
      explanation: "Slack is widely used for team messaging."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of asynchronous communication?",
      options: ["Flexibility across time zones", "Immediate response", "In-person meetings", "Higher costs"],
      correctAnswer: "Flexibility across time zones",
      explanation: "Async communication allows for flexible schedules."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a best practice for remote meetings?",
      options: ["No agenda", "Clear objectives", "Timeboxing", "Follow-up notes"],
      correctAnswer: "No agenda",
      explanation: "Meetings should always have an agenda."
    },
    {
      type: "multiple-choice",
      question: "What is the main challenge of remote team collaboration?",
      options: ["Communication barriers", "Lower productivity", "No internet", "More office space"],
      correctAnswer: "Communication barriers",
      explanation: "Remote teams must overcome communication challenges."
    },
    {
      type: "true-false",
      question: "Video calls can help build trust in remote teams.",
      correctAnswer: true,
      explanation: "Face-to-face interaction builds trust."
    },
    {
      type: "true-false",
      question: "Remote teams never need to meet in person.",
      correctAnswer: false,
      explanation: "Occasional in-person meetings can be valuable."
    },
    {
      type: "true-false",
      question: "Clear documentation is more important in remote teams.",
      correctAnswer: true,
      explanation: "Documentation helps align distributed teams."
    },
    {
      type: "short-answer",
      question: "What is the main purpose of daily stand-ups in remote teams?",
      correctAnswer: "Synchronize work and identify blockers",
      explanation: "Stand-ups keep everyone aligned."
    },
    {
      type: "short-answer",
      question: "Name a tool for collaborative document editing.",
      correctAnswer: "Google Docs, Notion, or Confluence",
      explanation: "These tools support real-time editing."
    },
    {
      type: "multiple-choice",
      question: "Which practice helps maintain work-life balance in remote work?",
      options: ["Setting boundaries", "Working all hours", "Ignoring breaks", "Always being online"],
      correctAnswer: "Setting boundaries",
      explanation: "Boundaries prevent burnout."
    },
    {
      type: "multiple-choice",
      question: "What is the main benefit of using project management tools?",
      options: ["Track progress and tasks", "Increase meetings", "Reduce transparency", "Limit collaboration"],
      correctAnswer: "Track progress and tasks",
      explanation: "Project management tools help organize work."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is a sign of effective remote collaboration?",
      options: ["Clear goals and accountability", "Missed deadlines", "Unclear roles", "Lack of feedback"],
      correctAnswer: "Clear goals and accountability",
      explanation: "Effective teams have clarity and accountability."
    },
    {
      type: "multiple-choice",
      question: "What is the main risk of relying solely on chat for communication?",
      options: ["Misunderstandings", "Faster decisions", "Better documentation", "More face time"],
      correctAnswer: "Misunderstandings",
      explanation: "Chat can lead to miscommunication."
    },
    {
      type: "true-false",
      question: "Remote teams should have regular feedback sessions.",
      correctAnswer: true,
      explanation: "Feedback is crucial for improvement."
    },
    {
      type: "true-false",
      question: "Time zone differences can impact remote collaboration.",
      correctAnswer: true,
      explanation: "Time zones affect scheduling and communication."
    },
    {
      type: "short-answer",
      question: "What is the main benefit of using video for remote meetings?",
      correctAnswer: "Improves engagement and understanding",
      explanation: "Video adds non-verbal cues."
    },
    {
      type: "short-answer",
      question: "Name a strategy for onboarding remote team members.",
      correctAnswer: "Mentorship, documentation, or virtual tours",
      explanation: "These help new hires integrate."
    },
    {
      type: "multiple-choice",
      question: "Which tool is used for tracking issues and tasks in remote teams?",
      options: ["Jira", "Photoshop", "Zoom", "Slack"],
      correctAnswer: "Jira",
      explanation: "Jira is a popular issue tracker."
    },
    {
      type: "multiple-choice",
      question: "What is the main purpose of a team charter?",
      options: ["Define team values and expectations", "Schedule meetings", "Assign tasks", "Write code"],
      correctAnswer: "Define team values and expectations",
      explanation: "Charters set team norms."
    },
    {
      type: "multiple-choice",
      question: "Which of the following is NOT a challenge for remote teams?",
      options: ["Proximity bias", "Clear communication", "Loneliness", "Time zone differences"],
      correctAnswer: "Clear communication",
      explanation: "Clear communication is a solution, not a challenge."
    },
    {
      type: "true-false",
      question: "Remote work requires more self-discipline than office work.",
      correctAnswer: true,
      explanation: "Remote workers must manage their own time."
    },
    {
      type: "short-answer",
      question: "What is the main goal of remote team collaboration?",
      correctAnswer: "Achieve shared objectives efficiently despite distance",
      explanation: "Collaboration is about working together toward goals."
    }
  ]
};