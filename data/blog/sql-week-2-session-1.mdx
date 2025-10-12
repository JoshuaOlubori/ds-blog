---
title: "Data Analytics with SQL (SQL Joins)"
date: 2025-09-04T16:32:14Z
# lastmod: '2021-02-01'
tags: ["sql"]
draft: false
summary: "Understanding SQL Joins - Combining data from multiple tables"
layout: PostSimple
bibliography: references-data.bib
---

## Overview

Welcome to Week 2 of our SQL class! In our previous sessions, we learned to retrieve, filter, group, and sort data from single tables using `SELECT`, `WHERE`, `GROUP BY`, `ORDER BY`, and `HAVING`. Today, we'll take a major step forward by learning how to combine data from multiple tables using SQL joins. This is where SQL becomes truly powerful—allowing you to connect related information stored across different tables to answer complex business questions. We'll focus on `INNER JOIN` and `LEFT JOIN`, the most commonly used join types in data analytics.

<TOCInline toc={props.toc} exclude="Overview" toHeading={2} />

## Understanding Table Relationships

Before diving into joins, let's examine our `Parks_and_Recreation` database structure. We have three main tables:

1. **`employee_demographics`** - Contains personal information (age, gender, birth_date)
2. **`employee_salary`** - Contains job information (occupation, salary, department)
3. **`parks_departments`** - Contains department names

Notice that these tables share common columns that allow us to connect them:
- `employee_demographics` and `employee_salary` both have `employee_id`
- `employee_salary` has `dept_id` which corresponds to `department_id` in `parks_departments`

Let's first examine our tables individually:

```sql
SELECT *
FROM employee_demographics;
```

```sql
SELECT *
FROM employee_salary;
```

```sql
SELECT *
FROM parks_departments;
```

The key insight is that these tables are designed to work together. Rather than storing all employee information in one massive table, we've normalized the data into logical groups. This approach reduces redundancy and makes data management more efficient.

## What Are SQL Joins?

SQL joins allow you to combine rows from two or more tables based on related columns. Think of joins as a way to "stitch together" related information that's been split across multiple tables.

The basic syntax for a join is:

```sql
SELECT columns
FROM table1
JOIN table2
    ON table1.common_column = table2.common_column;
```

The `ON` clause specifies how the tables should be connected—it's the "glue" that determines which rows from each table should be combined.

## INNER JOIN: Finding Matches

An `INNER JOIN` returns only the rows where there's a match in both tables. If a row in one table doesn't have a corresponding match in the other table, it won't appear in the results.

Let's start with a basic inner join between our demographics and salary tables:

```sql
SELECT *
FROM employee_demographics
JOIN employee_salary
    ON employee_demographics.employee_id = employee_salary.employee_id;
```

Notice that we specify which table each `employee_id` comes from using the dot notation (`table_name.column_name`). This is necessary because both tables have a column with the same name.

Looking at the results, you'll notice that Ron Swanson doesn't appear. This is because he exists in the `employee_salary` table (employee_id = 2) but not in the `employee_demographics` table. Since an `INNER JOIN` only returns matches from both tables, Ron is excluded.

### Using Table Aliases

Writing full table names repeatedly makes queries verbose and hard to read. We can use aliases to shorten table names:

```sql
SELECT *
FROM employee_demographics dem
INNER JOIN employee_salary sal
    ON dem.employee_id = sal.employee_id;
```

Here, `dem` is an alias for `employee_demographics` and `sal` is an alias for `employee_salary`. The `INNER` keyword is optional—`JOIN` defaults to `INNER JOIN`.

### Selecting Specific Columns

Instead of selecting all columns with `*`, we can choose specific columns and give them meaningful aliases:

```sql
SELECT dem.first_name, 
       dem.last_name, 
       dem.age, 
       dem.gender,
       sal.occupation, 
       sal.salary
FROM employee_demographics dem
INNER JOIN employee_salary sal
    ON dem.employee_id = sal.employee_id;
```

Output (partial):

| first_name | last_name | age | gender | occupation                              | salary |
|------------|-----------|-----|--------|-----------------------------------------|--------|
| Leslie     | Knope     | 44  | Female | Deputy Director of Parks and Recreation | 75000  |
| Tom        | Haverford | 36  | Male   | Entrepreneur                            | 50000  |
| April      | Ludgate   | 29  | Female | Assistant to the Director               | 25000  |

This gives us a clean, focused view combining personal and professional information for each employee.

## LEFT JOIN: Including All Records from the Left Table

A `LEFT JOIN` returns all rows from the left table (the first table mentioned), plus matching rows from the right table. If there's no match in the right table, the result will contain `NULL` values for the right table's columns.

```sql
SELECT *
FROM employee_salary sal
LEFT JOIN employee_demographics dem
    ON sal.employee_id = dem.employee_id;
```

Now Ron Swanson appears in our results! Since he exists in the `employee_salary` table (our left table) but not in `employee_demographics`, he shows up with `NULL` values for age, gender, and birth_date.

Output (partial):

| employee_id | first_name | last_name | occupation            | salary | dept_id | employee_id | first_name | last_name | age  | gender | birth_date |
|-------------|------------|------------|----------------------|--------|---------|-------------|------------|-----------|------|--------|------------|
| 2           | Ron        | Swanson   | Director             | 70000  | 1       | NULL        | NULL       | NULL      | NULL | NULL   | NULL       |

The comment in our original code explains this perfectly: "Ron refused to give his birth date or age or gender" to the HR department, so his demographic information is missing.

### RIGHT JOIN: The Mirror Image

A `RIGHT JOIN` works like a `LEFT JOIN` but reversed—it keeps all records from the right table and matches from the left table:

```sql
SELECT *
FROM employee_salary sal
RIGHT JOIN employee_demographics dem
    ON sal.employee_id = dem.employee_id;
```

In our current dataset, this looks similar to an `INNER JOIN` because all employees in the demographics table also exist in the salary table. However, if we had employees with demographic information but no salary data, they would appear with `NULL` values for salary-related columns.

## Joining Multiple Tables

Real-world analytics often requires combining more than two tables. Let's add department information to our employee data by joining all three tables:

```sql
SELECT dem.first_name,
       dem.last_name,
       sal.occupation,
       sal.salary,
       dept.department_name
FROM employee_demographics dem
INNER JOIN employee_salary sal
    ON dem.employee_id = sal.employee_id
JOIN parks_departments dept
    ON sal.dept_id = dept.department_id;
```

Notice that Andy doesn't appear in these results. Looking at the salary table, Andy has a `NULL` value for `dept_id`, meaning he's not assigned to any department. Since we're using `INNER JOIN`, only employees with matching department IDs are included.

Output (partial):

| first_name | last_name | occupation                              | salary | department_name      |
|------------|------------|----------------------------------------|--------|----------------------|
| Leslie     | Knope     | Deputy Director of Parks and Recreation | 75000  | Parks and Recreation |
| Tom        | Haverford | Entrepreneur                           | 50000  | Parks and Recreation |
| April      | Ludgate   | Assistant to the Director              | 25000  | Parks and Recreation |

### Including Employees Without Departments

To include Andy (who has no department assignment), we can use a `LEFT JOIN` for the department table:

```sql
SELECT dem.first_name,
       dem.last_name,
       sal.occupation,
       sal.salary,
       dept.department_name
FROM employee_demographics dem
INNER JOIN employee_salary sal
    ON dem.employee_id = sal.employee_id
LEFT JOIN parks_departments dept
    ON sal.dept_id = dept.department_id;
```

Now Andy appears with a `NULL` value for `department_name`, indicating he's not assigned to any department.

## Self Joins: Connecting a Table to Itself

A self join connects a table to itself, which is useful for finding relationships within the same dataset. Let's create a "Secret Santa" assignment where each employee is paired with the next employee by ID:

```sql
SELECT emp1.employee_id AS emp_santa,
       emp1.first_name AS santa_first_name,
       emp1.last_name AS santa_last_name,
       emp2.employee_id AS recipient_id,
       emp2.first_name AS recipient_first_name,
       emp2.last_name AS recipient_last_name
FROM employee_salary emp1
JOIN employee_salary emp2
    ON emp1.employee_id + 1 = emp2.employee_id;
```

Output (partial):

| emp_santa | santa_first_name | santa_last_name | recipient_id | recipient_first_name | recipient_last_name |
|-----------|------------------|-----------------|--------------|---------------------|---------------------|
| 1         | Leslie          | Knope           | 2            | Ron                 | Swanson             |
| 2         | Ron             | Swanson         | 3            | Tom                 | Haverford           |
| 3         | Tom             | Haverford       | 4            | April               | Ludgate             |

This creates a chain where Leslie is Ron's Secret Santa, Ron is Tom's Secret Santa, and so on. The last employee (Mark Brendanowicz) doesn't appear as a recipient because there's no employee with ID 12.

## Best Practices for Joins

1. **Always use table aliases** for readability, especially with multiple tables
2. **Be explicit about join types** - write `INNER JOIN` or `LEFT JOIN` rather than just `JOIN`
3. **Select only needed columns** instead of using `SELECT *`
4. **Use meaningful column aliases** to make results clearer
5. **Understand your data** - know which records might not have matches
6. **Start simple** - join two tables first, then add more as needed

## Common Join Scenarios in Business Analytics

Joins are essential for many business questions:

- **Customer Analysis**: Join customer demographic data with purchase history
- **Sales Reporting**: Combine product information with sales transactions and customer data
- **Employee Analytics**: Connect HR data with performance metrics and department information
- **Financial Analysis**: Link budget data with actual expenses and department details
- **Inventory Management**: Join product catalogs with supplier information and stock levels

## Class Assignment

Apply your join skills to answer these business-oriented questions. Write SQL queries using the `Parks_and_Recreation` database. Try solving each question before revealing the solution!

1. **Complete Employee Directory**
   - Create a complete employee directory showing first name, last name, age, occupation, and salary for all employees who have both demographic and salary information.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT dem.first_name, dem.last_name, dem.age, sal.occupation, sal.salary
     FROM employee_demographics dem
     INNER JOIN employee_salary sal
         ON dem.employee_id = sal.employee_id;
     ```
   </details>

2. **All Employees with Department Info**
   - List all employees (including those without demographic data) with their department names. Show first name, last name, occupation, and department name.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT sal.first_name, sal.last_name, sal.occupation, dept.department_name
     FROM employee_salary sal
     LEFT JOIN parks_departments dept
         ON sal.dept_id = dept.department_id;
     ```
   </details>

3. **Parks and Recreation Department Analysis**
   - Find all employees working in the "Parks and Recreation" department. Show their complete information including age, gender, occupation, and salary.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT dem.first_name, dem.last_name, dem.age, dem.gender, 
            sal.occupation, sal.salary, dept.department_name
     FROM employee_demographics dem
     INNER JOIN employee_salary sal ON dem.employee_id = sal.employee_id
     INNER JOIN parks_departments dept ON sal.dept_id = dept.department_id
     WHERE dept.department_name = 'Parks and Recreation';
     ```
   </details>

4. **High Earners by Department**
   - List employees earning more than $60,000 along with their department names. Include first name, last name, salary, and department name.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT sal.first_name, sal.last_name, sal.salary, dept.department_name
     FROM employee_salary sal
     LEFT JOIN parks_departments dept ON sal.dept_id = dept.department_id
     WHERE sal.salary > 60000;
     ```
   </details>

5. **Employees Missing Demographic Data**
   - Find employees who have salary information but are missing demographic data. Show their employee ID, first name, last name, and occupation.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT sal.employee_id, sal.first_name, sal.last_name, sal.occupation
     FROM employee_salary sal
     LEFT JOIN employee_demographics dem ON sal.employee_id = dem.employee_id
     WHERE dem.employee_id IS NULL;
     ```
   </details>

6. **Department Average Age**
   - Calculate the average age of employees by department. Show department name and average age (rounded to 1 decimal place).

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT dept.department_name, ROUND(AVG(dem.age), 1) AS avg_age
     FROM employee_demographics dem
     INNER JOIN employee_salary sal ON dem.employee_id = sal.employee_id
     INNER JOIN parks_departments dept ON sal.dept_id = dept.department_id
     GROUP BY dept.department_name;
     ```
   </details>

7. **Female Employees with Salary Info**
   - List all female employees with their job information. Show first name, last name, age, occupation, salary, and department name.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT dem.first_name, dem.last_name, dem.age, 
            sal.occupation, sal.salary, dept.department_name
     FROM employee_demographics dem
     INNER JOIN employee_salary sal ON dem.employee_id = sal.employee_id
     LEFT JOIN parks_departments dept ON sal.dept_id = dept.department_id
     WHERE dem.gender = 'Female';
     ```
   </details>

8. **Employees Without Department Assignment**
   - Find employees who haven't been assigned to any department. Show their first name, last name, occupation, and salary.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT sal.first_name, sal.last_name, sal.occupation, sal.salary
     FROM employee_salary sal
     LEFT JOIN parks_departments dept ON sal.dept_id = dept.department_id
     WHERE dept.department_id IS NULL;
     ```
   </details>

9. **Department Salary Summary**
   - Create a salary summary by department showing department name, number of employees, and total salary budget.

   <details>
     <summary>Show Solution</summary>
     ```sql
     SELECT dept.department_name, 
            COUNT(sal.employee_id) AS employee_count,
            SUM(sal.salary) AS total_salary_budget
     FROM parks_departments dept
     LEFT JOIN employee_salary sal ON dept.department_id = sal.dept_id
     GROUP BY dept.department_name;
     ```
   </details>

10. **Senior Employee Mentorship Pairs**
    - Create mentorship pairs where employees over 40 are mentors for employees 35 and under. Show mentor and mentee information (first name, last name, age) side by side.

    <details>
      <summary>Show Solution</summary>
      ```sql
      SELECT mentor.first_name AS mentor_first_name,
             mentor.last_name AS mentor_last_name,
             mentor.age AS mentor_age,
             mentee.first_name AS mentee_first_name,
             mentee.last_name AS mentee_last_name,
             mentee.age AS mentee_age
      FROM employee_demographics mentor
      JOIN employee_demographics mentee ON mentor.employee_id != mentee.employee_id
      WHERE mentor.age > 40 AND mentee.age <= 35;
      ```
    </details>

## Wrapping Up

In this session, we've mastered the fundamentals of SQL joins—one of the most powerful features of relational databases. You've learned how `INNER JOIN` finds matching records across tables, how `LEFT JOIN` preserves all records from the left table, and how to combine multiple tables to answer complex business questions.

Joins are the foundation of data analytics because real-world data is rarely contained in a single table. Whether you're analyzing customer behavior, financial performance, or employee metrics, you'll use joins to connect related information and uncover insights.

Practice these concepts with the assignment questions, and experiment with different join combinations. In our next session, we'll explore `RIGHT JOIN`, `FULL OUTER JOIN`, and more advanced join techniques. Keep practicing, and you'll soon be combining data like a pro!
