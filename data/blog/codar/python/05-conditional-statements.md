---
title: "📖 Conditional Statements"
date: 2026-01-30T16:32:14Z
# lastmod: '2021-02-01'
tags: ["python"]
draft: false
summary: "To do or not to do"
layout: PostSimple
bibliography: references-data.bib
---

## Learning Objectives

After this section, you will be able to:

- Use a simple conditional statement in programming
- Know what a Boolean value is
- Express conditionals with comparison operators

## 🤔 Introduction to Conditionals

Thus far, every program we have written has been executed line by line in order. Instead of executing every line of code every single time a program is run, it is often useful to create sections of the program which are only executed in certain situations.

For example, the following code checks whether the user is of age:

```python
age = int(input("How old are you? "))

if age > 17:
    print("You are of age!")
    print("Here's a copy of GTA6 for you.")

print("Next customer, please!")
```

When the user is over the age of 17, the execution of the program should look like this:

```
How old are you? 18
You are of age!
Here's a copy of GTA6 for you.
Next customer, please!
```

If the user is 17 or under, only this is printed out:

```
How old are you? 16
Next customer, please!
```

These examples show us that the value given as input affects which parts of the program are executed. The program contains a _conditional statement_ with a block of code which is executed only if the condition in the statement is true.

<img src="images/1_5_1.png">

In a conditional statement the keyword `if` is followed by a _condition_, such as a comparison of two values. The code block following this header line is only executed if the condition is true.

Notice the colon character `:` following the `if` header. In the following code there is no colon:

```python
age = 10

# no colon at the end of the following line
if age > 17
    print("You are of age.")
```

Upon execution this causes an error:

```
File "program.py", line 3
  if age > 17
            ^
SyntaxError: invalid syntax
```

## 📊 Comparison Operators

Very typically conditions consist of comparing two values. Here is a table with the most common comparison operators used in Python:

| Operator | Purpose                  | Example  |
| :------: | ------------------------ | -------- |
|   `==`   | Equal to                 | `a == b` |
|   `!=`   | Not equal to             | `a != b` |
|   `>`    | Greater than             | `a > b`  |
|   `>=`   | Greater than or equal to | `a >= b` |
|   `<`    | Less than                | `a < b`  |
|   `<=`   | Less than or equal to    | `a <= b` |

Let's have a look at a program which prints out different things based on whether the number the user inputs is negative, positive, or equal to zero:

```python
number = int(input("Please type in a number: "))

if number < 0:
    print("The number is negative.")

if number > 0:
    print("The number is positive.")

if number == 0:
    print("The number is zero.")
```

Examples of how the program functions with three different inputs:

```
Please type in a number: 15
The number is positive.
```

```
Please type in a number: -18
The number is negative.
```

```
Please type in a number: 0
The number is zero.
```

## 📏 Indentation

Python recognises that a block of code is part of a conditional statement if each line of code in the block is _indented_ the same. That is, there should be a bit of whitespace at the beginning of every line of code within the code block. Each line should have the same amount of whitespace.

For example:

```python
password = input("Please type in a password: ")

if password == "kittycat":
    print("You knew the password!")
    print("You must be either the intended user...")
    print("...or quite an accomplished hacker.")

print("The program has finished its execution. Thanks and bye!")
```

You can use the Tab key, short for _tabulator_ key, to insert a set amount of whitespace.

<img src="images/1_5_keyboard.png">

Many text editors will automatically indent the following line when the Enter key is pressed after a colon character. When you want to end an indented code block you can use the `Backspace` key to return to the beginning of the line.

<img src="images/1_5_keyboard2.png">
<small><center>
The source of the keyboard pictures:
 <a href="https://pixabay.com/users/Clker-Free-Vector-Images-3736/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=311803">Clker-Free-Vector-Images</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=311803">Pixabay</a>
</center></small>

### 🛠️ Exercise 5.1: Orwell

Please write a program which asks the user for an integer number. The program should print out "Orwell" if the number is exactly 1984, and otherwise do nothing.

Example 1:

```
Please type in a number: 2020
```

Example 2:

```
Please type in a number: 1984
Orwell
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.2: Absolute Value

Please write a program which asks the user for an integer number. If the number is less than zero, the program should print out the number multiplied by -1. Otherwise the program prints out the number as is. Please have a look at the examples of expected behaviour below.

Example 1:

```
Please type in a number: -7
The absolute value of this number is 7
```

Example 2:

```
Please type in a number: 1
The absolute value of this number is 1
```

Example 3:

```
Please type in a number: -99
The absolute value of this number is 99
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.3: Soup or No Soup

Please write a program which asks for the user's name. If the name is anything but "Jerry", the program then asks for the number of portions and prints out the total cost. The price of a single portion is 5.90.

Example 1:

```
Please tell me your name: Kramer
How many portions of soup? 2
The total cost is 11.8
Next please!
```

Example 2:

```
Please tell me your name: Jerry
Next please!
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.4: Order of Magnitude

Please write a program which asks the user for an integer number. The program should then print out the magnitude of the number according to the following examples.

Example 1:

```
Please type in a number: 950
This number is smaller than 1000
Thank you!
```

Example 2:

```
Please type in a number: 59
This number is smaller than 1000
This number is smaller than 100
Thank you!
```

Example 3:

```
Please type in a number: 2
This number is smaller than 1000
This number is smaller than 100
This number is smaller than 10
Thank you!
```

Example 4:

```
Please type in a number: 1123
Thank you!
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

## ✔️ Boolean Values and Expressions

Any condition used in a conditional statement will result in a truth value, that is, either true or false. For example, the condition `a < 5` is true if `a` is less than 5, and false if `a` is equal to or greater than 5.

These types of values are often called _Boolean_ values, named after the English mathematician George Boole. In Python they are handled by the `bool` data type. Variables of type `bool` can only have two values: `True` or `False`.

Any bit of code that results in a Boolean value is called a _Boolean expression_. For example, the condition in a conditional statement is always a Boolean expression, and the words _condition_ and _Boolean expression_ can often be used interchangeably.

The result of a Boolean expression can be stored in a variable just like the result of any numerical calculation:

```python
a = 3
condition = a < 5
print(condition)
if condition:
    print("a is less than 5")
```

Output:

```
True
a is less than 5
```

The Python keywords `True` and `False` can also be used directly. In the following example the `print` command is executed every time, because the value of the condition is `True`:

```python
condition = True
if condition:
    print("This is printed every time.")
```

Output:

```
This is printed every time.
```

A program like this is not very useful, but later on during the course you will see examples of Boolean variables coming in very handy.

### 🛠️ Exercise 5.5: Calculator

Please write a program which asks the user for two numbers and an operation. If the operation is _add_, _multiply_ or _subtract_, the program should calculate and print out the result of the operation with the given numbers. If the user types in anything else, the program should print out nothing.

Example 1:

```
Number 1: 10
Number 2: 17
Operation: add

10 + 17 = 27
```

Example 2:

```
Number 1: 4
Number 2: 6
Operation: multiply

4 * 6 = 24
```

Example 3:

```
Number 1: 4
Number 2: 6
Operation: subtract

4 - 6 = -2
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.6: Temperatures

Please write a program which asks the user for a temperature in degrees Fahrenheit, and then prints out the same in degrees Celsius. If the converted temperature falls below zero degrees Celsius, the program should also print out "Brr! It's cold in here!".

The formula for converting degrees Fahrenheit to degrees Celsius can be found easily with a search engine.

Example 1:

```
Please type in a temperature (F): 101
101 degrees Fahrenheit equals 38.333333333333336 degrees Celsius
```

Example 2:

```
Please type in a temperature (F): 21
21 degrees Fahrenheit equals -6.111111111111111 degrees Celsius
Brr! It's cold in here!
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.7: Daily Wages

Please write a program which asks for the hourly wage, hours worked, and the day of the week. The program should then print out the daily wages, which equal hourly wage multiplied by hours worked, except on Sundays when the hourly wage is doubled.

Example 1:

```
Hourly wage: 8.5
Hours worked: 3
Day of the week: Monday
Daily wages: 25.5 euros
```

Example 2:

```
Hourly wage: 12.5
Hours worked: 10
Day of the week: Sunday
Daily wages: 250.0 euros
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.8: Loyalty Bonus

This program calculates the end of year bonus a customer receives on their loyalty card. The bonus is calculated with the following formula:

- If there are less than a hundred points on the card, the bonus is 10%
- In any other case the bonus is 15%

The program should work like this:

```
How many points are on your card? 55
Your bonus is 10 %
You now have 60.5 points
```

But there is a problem with the program, so with some inputs it doesn't work quite right:

```
How many points are on your card? 95
Your bonus is 10 %
Your bonus is 15 %
You now have 120.175 points
```

Please fix the program so that there is always either a 10% or a 15% bonus, but never both.

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.9: What to Wear Tomorrow

Please write a program which asks for tomorrow's weather forecast and then suggests weather-appropriate clothing.

The suggestion should change if the temperature (measured in degrees Celsius) is over 20, 10 or 5 degrees, and also if there is rain on the radar.

Example 1:

```
What is the weather forecast for tomorrow?
Temperature: 21
Will it rain (yes/no): no
Wear jeans and a T-shirt
```

Example 2:

```
What is the weather forecast for tomorrow?
Temperature: 11
Will it rain (yes/no): no
Wear jeans and a T-shirt
I recommend a jumper as well
```

Example 3:

```
What is the weather forecast for tomorrow?
Temperature: 7
Will it rain (yes/no): no
Wear jeans and a T-shirt
I recommend a jumper as well
Take a jacket with you
```

Example 4:

```
What is the weather forecast for tomorrow?
Temperature: 3
Will it rain (yes/no): yes
Wear jeans and a T-shirt
I recommend a jumper as well
Take a jacket with you
Make it a warm coat, actually
I think gloves are in order
Don't forget your umbrella!
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

### 🛠️ Exercise 5.10: Solving a Quadratic Equation

In the Python `math` module there is the function `sqrt`, which calculates the square root of a number. You can use it like so:

```python
from math import sqrt

print(sqrt(9))
```

Output:

```
3.0
```

We will return to the concept of a _module_ and the `import` statement later. For now, it is sufficient to understand that the line `from math import sqrt` allows us to use the `sqrt` function in our program.

Please write a program for solving a quadratic equation of the form ax²+bx+c. The program asks for values a, b and c. It should then use the quadratic formula to solve the equation:

$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$

You can assume the equation will always have two real roots, so the above formula will always work.

Example:

```
Value of a: 1
Value of b: 2
Value of c: -8

The roots are 2.0 and -4.0
```

[Click here to open the Exercise in Google Colab](https://colab.research.google.com/github/JoshuaOlubori/data-science-course/blob/main/Python/01/python_01.ipynb)

[⬅️ Previous: Arithmetic Operations](04-arithmetic-operations.md) | [Next: Course Home 🏠](README.md)
