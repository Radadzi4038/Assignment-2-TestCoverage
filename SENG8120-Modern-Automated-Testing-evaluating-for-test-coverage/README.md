# Assignment 2 – Evaluating and Improving Test Coverage

# Overview
This project is part of SENG8120 - Modern Automated Testing.  
The objective is to analyze, improve, and test existing TypeScript code using Test-Driven Development (TDD) principles and Git best practices.

# Test Summary
- Tests have been added for both core modules to ensure thorough handling of edge cases and normal inputs.

# 'calculateCanvasSize.test.ts'
- Returns correct result for valid input.
- Handles zero dimensions.
- Throws error for non-numeric input.
- Handles very large dimension values.
- Parses decimal strings properly (via ‘parseInt ‘logic).

# 'paintRequiredCalculator.test.ts'
- Returns correct paint required for given area and coverage.
- Throws error if coverage is `0` (invalid).
- Throws error for negative coverage values.
- Handles decimal inputs correctly with `toBeCloseTo`.

# Refactored Production Code

# 'calculateCanvasSize.ts'
- Now includes input validation and throws an error if either input is not a valid number.

# 'paintRequiredCalculator.ts'
- Includes a safety check to prevent division by zero or negative values, and throws appropriate errors.

# 'main.ts'
- Wrapped logic in a 'try/catch' block.
- Added error logging for user-friendly output.
- Output now shows paint required rounded to 2 decimal places for clarity.

# How to Run the Project

# Install dependencies:
```bash
npm install

Build the project (optional if applicable):
bash
npm run build

Start the program:
bash
npm start

Running Tests
Run all tests:
bash
npm run test

Watch mode (for continuous testing):
bash
npm run test -- --watch

# 'Developer Notes'
- All tests follow TDD principles.
- The code was improved before and during test creation.
- Refactoring was based on analysis of inputs and error conditions.
- Git commits were made per test.

# 'Author'
-Created by: Richmond Adadzi
= Submitted for SENG8120 – Modern Automated Testing

Repository: https://github.com/Radadzi4038/Assignment-2-TestCoverage.git
