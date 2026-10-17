# m01l02-02 · Server Constraints

**Lesson:** [Server Components: Async Execution & Constraints](https://learnsome.tech/learn/nextjs-course/m01l02) (lesson 1.2, module 1: Next.js 15 Foundations & App Router) · Free  
**Check:** Graded

## Goal

You can author asynchronous React Server Components and navigate the architectural constraints of server-side execution.

## Files

- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/server_constraints.ts`](starter/server_constraints.ts): the listing from the lesson
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l02/m01l02-02/starter`
2. Read `server_constraints.ts`.
3. Run it: `node server_constraints.ts`.
4. Check it from the repository root: `./check m01l02-02`.

## Expected output

```text
Aggregated services: 2
Average latency: 21 ms
```

## How to check

`./check m01l02-02` copies `starter/` into a scratch directory and runs `node server_constraints.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nextjs-course/m01l02) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
