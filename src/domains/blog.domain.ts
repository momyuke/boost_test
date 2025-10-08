export interface IBlog {
  title?: string;
  summary?: string;
  content?: string;
  author?: string;
  category?: string;
  publishDate?: Date;
  id?: string;
}

export interface ICreateBlog extends IBlog {
  step?: number;
}

export const mockBlogs: IBlog[] = [
  {
    id: crypto.randomUUID(),
    title: "Building Scalable Frontend Architecture with React",
    summary:
      "A deep dive into structuring large React applications using modular design, feature-based folders, and reusable components.",
    content: `
Building scalable frontend architecture requires discipline and a clear folder structure.
In this article, we’ll explore the concept of feature-based organization, where each feature
has its own components, services, and hooks. This helps in maintaining scalability and
testability as the app grows. We’ll also discuss using tools like React Query, Zustand, and
Storybook to improve developer experience and reliability.
    `,
    author: "Teguh Triprasetya",
    category: "Frontend Development",
    publishDate: new Date("2025-09-15"),
  },
  {
    id: crypto.randomUUID(),
    title: "Improving Web Performance with Lazy Loading and Code Splitting",
    summary:
      "Learn how to boost your web performance by lazy loading routes and components.",
    content: `
Page speed directly impacts user experience and SEO.
We’ll explain how to implement code-splitting in React using dynamic imports,
and how to lazy-load images and components to reduce bundle size and improve TTI.
    `,
    author: "Nina Patel",
    category: "Frontend Development",
    publishDate: new Date("2025-09-12"),
  },
  {
    id: crypto.randomUUID(),
    title: "Securing REST APIs with NestJS and JWT",
    summary:
      "Learn how to secure your NestJS API using JSON Web Tokens, guards, and role-based authentication.",
    content: `
Security is one of the most important aspects of backend development.
In this article, we walk through how to implement JWT authentication in NestJS,
including how to issue tokens, verify them, and protect routes using guards.
We also cover best practices for refreshing tokens and handling user roles.
    `,
    author: "Sarah L.",
    category: "Backend Development",
    publishDate: new Date("2025-08-21"),
  },
  {
    id: crypto.randomUUID(),
    title: "Building Reliable APIs with TypeScript and Express",
    summary:
      "A complete guide to structuring scalable and type-safe Express APIs using TypeScript.",
    content: `
TypeScript brings type safety and maintainability to Express applications.
We’ll cover how to define types for routes, middleware, and responses.
We’ll also integrate error handling and validation layers using Zod.
    `,
    author: "Alex Wong",
    category: "Backend Development",
    publishDate: new Date("2025-05-30"),
  },
  {
    id: crypto.randomUUID(),
    title: "Optimizing Cloud Infrastructure Costs in AWS",
    summary:
      "Tips and strategies to reduce AWS cloud costs without compromising performance.",
    content: `
Cloud cost optimization is a continuous process.
In this article, we discuss using AWS Cost Explorer, setting up budgets, and rightsizing instances.
We also dive into using Spot Instances and serverless solutions like Lambda for better cost efficiency.
    `,
    author: "Rachel Kim",
    category: "DevOps & Cloud",
    publishDate: new Date("2025-09-25"),
  },
  {
    id: crypto.randomUUID(),
    title: "Containerization 101: Why Docker Still Matters",
    summary:
      "Explore the fundamentals of Docker and why it remains crucial in modern DevOps workflows.",
    content: `
Docker has become the backbone of deployment pipelines.
We’ll discuss how containers help with environment consistency, portability,
and isolation. You'll learn how to build, tag, and run images effectively in CI/CD environments.
    `,
    author: "Ella Zhao",
    category: "DevOps & Cloud",
    publishDate: new Date("2025-09-10"),
  },
  {
    id: crypto.randomUUID(),
    title: "Designing with Empathy: Principles of Human-Centered UI",
    summary:
      "Great UI design is built on empathy. Learn how to apply human-centered principles in digital products.",
    content: `
Design is not just about aesthetics — it's about empathy.
Understanding user pain points and motivations leads to more intuitive interfaces.
We’ll explore techniques like user journey mapping, accessibility design, and micro-interaction refinements
to craft experiences that users truly enjoy.
    `,
    author: "Kevin Tan",
    category: "UI/UX Design",
    publishDate: new Date("2025-10-02"),
  },
  {
    id: crypto.randomUUID(),
    title: "A Gentle Introduction to Machine Learning for Developers",
    summary:
      "Understand the fundamentals of machine learning, from data preprocessing to model deployment.",
    content: `
Machine learning is transforming industries, but getting started can be intimidating.
We’ll simplify core concepts like supervised vs unsupervised learning, data pipelines,
and model evaluation. By the end, you’ll know how to integrate ML APIs into your apps easily.
    `,
    author: "Linda Park",
    category: "Machine Learning & AI",
    publishDate: new Date("2025-07-29"),
  },
  {
    id: crypto.randomUUID(),
    title: "Kotlin Multiplatform: Sharing Code Across Mobile Apps",
    summary:
      "Learn how Kotlin Multiplatform enables code sharing between Android and iOS.",
    content: `
Kotlin Multiplatform is an exciting way to reduce duplication between mobile apps.
This article explains how to share business logic, handle networking, and still
keep native UI performance. We'll also compare it briefly to Flutter and React Native.
    `,
    author: "Tom Rivera",
    category: "Mobile Development",
    publishDate: new Date("2025-06-18"),
  },
  {
    id: crypto.randomUUID(),
    title: "Mastering Async Patterns in JavaScript",
    summary:
      "A complete guide to mastering asynchronous programming in JavaScript using callbacks, promises, and async/await.",
    content: `
Asynchronous programming allows JavaScript to handle multiple operations efficiently without blocking the main thread.
In this article, we’ll explore how callbacks evolved into promises and then into async/await syntax.
We'll look at real-world examples of chaining promises, handling rejections, and optimizing API calls.
By the end, you'll have a solid understanding of when and how to use each async pattern effectively.
    `,
    author: "Teguh Triprasetya",
    category: "Frontend Development",
    publishDate: new Date("2025-10-08"),
  },
  {
    id: crypto.randomUUID(),
    title: "Designing a Scalable Database Schema",
    summary:
      "Learn strategies for designing flexible and scalable databases for growing applications.",
    content: `
Database design determines long-term scalability.
We’ll explore normalization, indexing, and sharding concepts.
We’ll also discuss when to denormalize and use NoSQL for high-traffic systems.
    `,
    author: "James Carter",
    category: "Software Architecture",
    publishDate: new Date("2025-10-01"),
  },
  {
    id: crypto.randomUUID(),
    title: "How Open Source Improves Your Coding Career",
    summary:
      "Discover how contributing to open-source projects can accelerate your learning and professional growth.",
    content: `
Open-source contribution builds your portfolio, network, and real-world experience.
This post discusses how to find beginner-friendly repositories, collaborate with maintainers,
and showcase your work to employers. We'll also cover the etiquette of pull requests and documentation.
    `,
    author: "Emily Nguyen",
    category: "Open Source & Community",
    publishDate: new Date("2025-07-10"),
  },
];

export const blogCategories = [
  "Frontend Development",
  "Backend Development",
  "UI/UX Design",
  "Security",
  "DevOps & Cloud",
  "Mobile Development",
  "Software Architecture",
  "Testing & QA",
  "Machine Learning & AI",
  "Data Engineering",
  "Open Source & Community",
  "Career & Productivity",
];
