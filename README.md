# TypeScript Tasks

A comprehensive collection of TypeScript exercises, challenges, and practical tasks designed to improve your TypeScript skills from beginner to advanced levels.

## 📚 Overview

This repository contains a curated set of TypeScript tasks that cover various aspects of the language, including:

- **Type System Fundamentals** - Basic types, interfaces, and type annotations
- **Advanced Types** - Union types, intersection types, conditional types, and mapped types
- **Generics** - Generic functions, classes, and constraints
- **Object-Oriented Programming** - Classes, inheritance, abstract classes, and decorators
- **Functional Programming** - Higher-order functions, utility types, and functional patterns
- **Async Programming** - Promises, async/await, and type-safe asynchronous operations
- **Real-world Applications** - Practical exercises simulating real development scenarios

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TypeScript (v4.5 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/james-tiger/TypeScripts-Tasks.git
cd TypeScripts-Tasks
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install TypeScript globally (if not already installed):
```bash
npm install -g typescript
```

### Running the Tasks

Each task is organized in its own directory with the following structure:
```
task-name/
├── README.md          # Task description and requirements
├── src/
│   ├── index.ts      # Main implementation file
│   └── types.ts      # Type definitions (if needed)
├── tests/
│   └── index.test.ts # Test cases
└── solution/         # Reference solution (hidden initially)
```

To work on a specific task:
```bash
cd task-name
npm run dev          # Start development mode with watch
npm run test         # Run tests
npm run build        # Compile TypeScript
```

## 📋 Task Categories

### 🔰 Beginner Tasks
- **Task 01**: Basic Types and Annotations
- **Task 02**: Interfaces and Object Types
- **Task 03**: Arrays and Tuples
- **Task 04**: Functions and Parameters
- **Task 05**: Optional and Default Parameters

### 🔥 Intermediate Tasks
- **Task 06**: Union and Intersection Types
- **Task 07**: Generic Functions and Classes
- **Task 08**: Utility Types (Partial, Required, Pick, Omit)
- **Task 09**: Enums and Literal Types
- **Task 10**: Class Inheritance and Abstract Classes

### 🚀 Advanced Tasks
- **Task 11**: Conditional Types and Type Guards
- **Task 12**: Mapped Types and Template Literals
- **Task 13**: Decorators and Metadata
- **Task 14**: Module Augmentation and Declaration Merging
- **Task 15**: Advanced Async Patterns

### 🎯 Practical Projects
- **Project 01**: Task Manager API with Express.js
- **Project 02**: Type-safe Data Fetching Library
- **Project 03**: Configuration Management System
- **Project 04**: Generic Repository Pattern
- **Project 05**: Event-driven Architecture Implementation

## 🧪 Testing

All tasks include comprehensive test suites using Jest and ts-jest:

```bash
# Run all tests
npm test

# Run tests for a specific task
npm test -- task-01

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📖 Learning Path

**Recommended progression:**

1. **Start with Basics** (Tasks 01-05): Master fundamental TypeScript concepts
2. **Build Intermediate Skills** (Tasks 06-10): Explore advanced type system features
3. **Tackle Advanced Topics** (Tasks 11-15): Deep dive into complex TypeScript patterns
4. **Apply Knowledge** (Projects 01-05): Build real-world applications

## 🔧 Configuration

### TypeScript Configuration

The project uses a strict TypeScript configuration (`tsconfig.json`) to enforce best practices:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### ESLint and Prettier

Code quality is maintained using:
- **ESLint** with TypeScript rules
- **Prettier** for consistent formatting
- **Husky** for pre-commit hooks

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-task`
3. **Add your task** following the existing structure
4. **Include comprehensive tests**
5. **Update documentation**
6. **Submit a pull request**

### Task Creation Guidelines

When creating new tasks:
- Include clear problem description and requirements
- Provide starter code with appropriate type annotations
- Add comprehensive test cases
- Include a reference solution
- Document learning objectives and key concepts

## 📚 Resources

### Official Documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### Additional Learning Materials
- [TypeScript Exercises](https://typescript-exercises.github.io/)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
- [TypeScript Playground](https://www.typescriptlang.org/play)

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- TypeScript team for the amazing language
- Contributors who have helped improve these tasks
- Open source community for inspiration and feedback

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/james-tiger/TypeScripts-Tasks/issues)
- **Discussions**: [GitHub Discussions](https://github.com/james-tiger/TypeScripts-Tasks/discussions)
- **Email**: [Contact](mailto:james.tiger@example.com)

---

**Happy coding! 🎉**

*Start with the basics, challenge yourself with advanced concepts, and build amazing TypeScript applications!*
