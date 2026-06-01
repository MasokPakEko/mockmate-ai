Current Architercture:

## Question Generator

User pastes vacancy
↓
User selects amount
↓
Generate Questions
↓
Questions appear
↓
Regenerate Questions

## What We Want:

Question Generator
↓
(Interview Session Engine)
User clicks Generate
↓
Validation passes
↓
Interview Session becomes Active
↓
Generate Questions
↓
randomizedQuestions created
↓
questions saved to history
↓
questions rendered

## It will be read as,

Get vacancy input.

If vacancy is empty:
Show validation error.
Stop execution.

Hide validation error.

Interview officially starts.

Create question storage.

Continue generating questions.

or

Interview Session
↓
started = false
↓
User generates
↓
started = true
↓
Questions appear

## Connect History To Question Generation

Right Now:

Questions are generated
↓
Displayed
↓
Forgotten

We Want:

Questions are generated
↓
Stored in history
↓
Displayed

## Before Day 6, MockmatE AI behaved like:

Input
↓
Generate
↓
Forget Everything

## Now it behaves like:

Input
↓
Generate
↓
Remember Recent Questions
↓
Generate Smarter Questions
