## Accordion FAQ

Take a look at the UI of the App:

![Accordion FAQ](../assets/accordion.png)

- Use the data (questions) given below in a closable accordion
- The `Q` (Question) will be visible on the accordion
- The accordion can be in two state `open` and `closed`
- When it is open state only Question will be visible
- Clicking on accordion can show the `A` (Answer)
- Clicking on the accordion will close the visible answer.
- To understand both state have a look at the image given on the top.
- Make sure that only one question is open at a given point in time.

## Data to create this app

```js
let questions = [
  {
    Q: 'Who is it for?',
    A:
      'Recent college graduates, students taking gap year, dropouts, professionals looking to switch careers, anyone learning web development but needs right environment and guidance. No prior programming knowledge required.',
  },
  {
    Q: 'Does AltCampus help me get a job?',
    A:
      'Yes. All we can. We help you at every stage, help you build strong portfolio, prepare for interviews, put you in touch with companies for interview.',
  },
  {
    Q: 'How does the entire process work?',
    A: 'You can read about it here - How it works.',
  },
  {
    Q: 'Is this course self-paced or batched?',
    A:
      'This program follows a blended approach. Students can move at their own pace, however they will be matched with peers learning same concepts.',
  },
];
```
