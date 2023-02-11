# Markown Draw Examples

- https://medium.com/technical-writing-is-easy/diagrams-in-documentation-markdown-guide-4e78419e8d2f
- https://mermaid-js.github.io/mermaid/#/

## Flow chart

```flow
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```

## mermaid

```mermaid
graph LR
A->B;
B->C;
C->A;
```
