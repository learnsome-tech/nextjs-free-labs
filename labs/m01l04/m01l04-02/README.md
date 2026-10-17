# m01l04-02 · Interleaved Slots

**Lesson:** [Component Tree Composition: Interleaving RSC & Client](https://learnsome.tech/learn/nextjs-course/m01l04) (lesson 1.4, module 1: Next.js 15 Foundations & App Router) · Free  
**Check:** Graded

## Goal

You can compose complex component trees by interleaving Server and Client Components using React children props.

## Files

- [`starter/interleaved_slots.ts`](starter/interleaved_slots.ts): the listing from the lesson
- [`starter/run.sh`](starter/run.sh): the command the lesson ran
- [`starter/tsconfig.json`](starter/tsconfig.json)
- [`expected.txt`](expected.txt): the output the check compares with
- [`check.json`](check.json): how `./check` runs and checks this lab

## Steps

1. Go to the starter: `cd labs/m01l04/m01l04-02/starter`
2. Read `interleaved_slots.ts`.
3. Run it: `node interleaved_slots.ts`.
4. Check it from the repository root: `./check m01l04-02`.

## Expected output

```text
Wrapper component: div.client-shell
Header label: Reports
Embedded child type: article.server-feed
Embedded payload: Secure database payload
```

## How to check

`./check m01l04-02` copies `starter/` into a scratch directory and runs `node interleaved_slots.ts` there, the way the site's lab sandbox does: that directory is the working directory and `HOME`, `LANG=C.UTF-8`, `TZ=UTC`, a limit of 10 seconds and 256 KiB of output per stream.

It passes when the output matches `expected.txt` by the site's rules, within the limits. Standard output is compared line by line; spaces at the end of a line and blank lines at the end do not count. If that differs, standard output followed by standard error is compared with Python traceback frames and blank lines set aside, so a lesson that shows an error passes when your program prints the same error. A pass here is a pass on the site.

---

[Open the lesson on LearnSome.tech](https://learnsome.tech/learn/nextjs-course/m01l04) · [All labs of this lesson](../README.md) · [Course README](../../../README.md)
