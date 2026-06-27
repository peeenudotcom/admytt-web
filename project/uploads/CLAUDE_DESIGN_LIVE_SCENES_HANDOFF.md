# adMYTT Live Product Scenes - Claude Design Handoff

## Objective

Upgrade the existing adMYTT marketing website so its product panels behave like clear, self-running product demonstrations.

The visitor must understand within four seconds that the product screen is actively demonstrating a workflow. Subtle floating, highlighting, or counter animation alone does not qualify as a live product scene.

Do not redesign the whole website. Improve the product demonstrations while preserving the existing brand, content hierarchy, and overall restrained SaaS visual language.

## Reference

Study the product presentation on:

https://ai.anyimmi.com

Use it as behavioral inspiration, not as a visual template.

The useful reference characteristics are:

- Product interfaces are rendered as HTML/DOM, not flat screenshots.
- Browser frames contain changing application states.
- Floating operational signals reinforce what just happened.
- Motion tells a product story rather than decorating the page.
- Screens remain legible and convincing when animation is paused.

Do not copy AnyImmi's typography, dark theme, wording, layout, or brand.

## Source

Primary editable source:

`/Users/parveensukhija/Documents/New project/admytt-live-website/index.html`

Supporting assets:

`/Users/parveensukhija/Documents/New project/admytt-live-website/assets`

Current standalone preview:

`/Users/parveensukhija/Downloads/adMYTT Website (live product scenes).html`

Work on the editable source first. Do not directly edit the packaged standalone preview.

## Technical Context

The page is a standalone custom component document using:

- `<x-dc>` markup
- `DCLogic`
- `ref="{{ ... }}"` callbacks
- Component state and custom click bindings
- Inline HTML styles plus a shared CSS block

Existing animation methods include:

- `_mountHeroScene`
- `_mountJourneyScene`
- `_mountAiScene`
- `_selectStage`

These currently produce ambient animation, but the result is too subtle. Refactor or replace them as needed.

Do not add a large framework or heavy animation dependency. Prefer:

- CSS transforms and opacity
- `requestAnimationFrame`
- `IntersectionObserver`
- Small state machines
- Existing component state

## Brand System

Use the existing adMYTT system:

- Ink navy: `#0B1230`
- Brand indigo: `#212177`
- Action blue: `#2453D4`
- Brand red: `#CB0000`
- Success green: `#0F9F6E`
- Light background: `#F6F8FC`
- Headings: Manrope
- Body and interface text: Inter

Keep the surrounding website quiet and professional. Spend visual energy inside the product scenes.

## Definition of a Live Product Scene

Each live scene must include:

1. A clear starting state.
2. A visible action or simulated cursor movement.
3. A meaningful product state change.
4. A short explanation of what just happened.
5. Play, pause, and replay controls.
6. A visible progress indicator.
7. A stable final state.
8. Touch, keyboard, and reduced-motion behavior.

The screen must not depend on animation to remain understandable.

## Scene 1: Hero Lead Workflow

Duration: approximately 12 seconds.

Storyboard:

1. Show the dashboard with a "Live demo" indicator and a Replay icon.
2. A visible cursor moves to "Add lead".
3. The cursor clicks the control.
4. A compact lead form appears inside the product frame.
5. Demo values are entered into name, destination, and source fields.
6. "Create lead" is clicked.
7. The form closes and a new lead row enters the pipeline.
8. The row receives the status "New enquiry".
9. Automatic assignment changes the owner to "Aisha Khan".
10. AI score appears as "82 - high intent".
11. A follow-up task appears as "Today, 4:00 PM".
12. A confirmation signal says "Lead captured, assigned, and prioritised".
13. Hold the completed state briefly, then stop or offer Replay.

Make the flow unmistakable without making it theatrical.

## Scene 2: Connected Student Journey

Duration: approximately 16 seconds.

Storyboard:

1. Start at Enquiry.
2. Advance through Counselling, Course selection, Application, Documents, Finance, Visa, and Enrolment.
3. At every stage, change both the active tab and the product panel content.
4. Animate one meaningful state change per stage.

Examples:

- Counselling: next action is scheduled.
- Course selection: a programme becomes shortlisted.
- Application: status changes from Draft to Submitted.
- Documents: Statement of Purpose changes from Missing to Uploaded.
- Finance: payment balance updates after a receipt.
- Visa: checklist changes from Blocked to Ready to file.
- Enrolment: outcome changes to Confirmed.

Requirements:

- Show a stage progress bar.
- Automatically advance only while the scene is visible.
- Pause when the visitor hovers, focuses, or interacts.
- Manual stage selection must take control for at least 12 seconds.
- Include Replay and Pause controls.

## Scene 3: AI Command Centre

Duration: approximately 9 seconds.

Storyboard:

1. Show "Scanning today's work".
2. A short progress state runs.
3. Three operational alerts enter sequentially.
4. Select the "3 leads at risk of going cold" alert.
5. Show AI drafting a concise follow-up.
6. Change the action status to "Ready for counsellor review".
7. Show a clear statement: "AI suggests. Your team decides."
8. End with a visible "Review draft" action.

Do not simulate autonomous admissions, financial, legal, or visa decisions.

## Controls

Every scene must have a compact control cluster inside its browser frame:

- Play/Pause icon button
- Replay icon button
- Progress indicator
- "Live demo" status

Use familiar icons and tooltips. Controls must be keyboard accessible and have visible focus styles.

Do not use large instructional text outside the product frame.

## Motion Rules

- Use transform and opacity for frequent animation.
- Keep ordinary transitions between 160 and 360 milliseconds.
- Cursor movement may take 450 to 700 milliseconds.
- Pause at important states long enough to read them.
- Never continuously tilt the whole product frame.
- Avoid looping floating animation on every object.
- Autoplay only after at least 45% of the scene is visible.
- Stop timers when the tab is hidden or the scene leaves the viewport.
- Pause on hover and keyboard focus.
- After one complete cycle, hold the final state and show Replay.
- Do not endlessly restart immediately.

## Reduced Motion

When `prefers-reduced-motion: reduce` is active:

- Do not autoplay.
- Do not move a simulated cursor.
- Remove spatial transitions and floating motion.
- Show the completed state.
- Keep manual stage controls usable.
- Preserve clear Play/Replay labels if animation can still be triggered manually without spatial motion.

## Responsive Behavior

Desktop:

- Product scenes should be large enough to inspect.
- Keep browser-frame content readable without scaling text below usable sizes.

Mobile:

- Recompose the product UI instead of shrinking a desktop screenshot.
- Hide secondary columns and nonessential navigation.
- Keep controls at least 44 by 44 CSS pixels.
- Ensure floating signals remain inside the viewport.
- No horizontal page overflow.

Test at:

- 390 by 844
- 768 by 1024
- 1280 by 720
- 1440 by 900

## Data and Security

- Use anonymized fictional demo data only.
- Do not embed the authenticated adMYTT application.
- Do not use iframes connected to production.
- Do not expose real leads, customers, students, documents, emails, or phone numbers.
- Label the product frame "Demo data" where appropriate.
- Do not make unverifiable product, customer, or security claims.

## Accessibility

- Controls must have accessible names.
- All interactive controls must work by keyboard.
- Use `aria-pressed` for Play/Pause state where appropriate.
- Do not place important information only in animation.
- Avoid flashing and rapid colour changes.
- Maintain contrast in inactive and active states.

## Acceptance Criteria

The work is complete only when:

1. A first-time visitor can identify the hero as a live product demo within four seconds.
2. The hero visibly completes the lead capture-to-follow-up workflow.
3. The journey scene visibly changes product states across all eight stages.
4. The AI scene visibly drafts an action for staff review.
5. Every scene supports Play, Pause, and Replay.
6. Manual interaction overrides autoplay.
7. Animations stop off-screen and when the browser tab is hidden.
8. Reduced-motion mode is stable and understandable.
9. Mobile layouts do not crop controls or overflow horizontally.
10. There are no console errors.
11. The page remains fully usable when animation is disabled.

## Verification

After implementation:

1. Run the site locally.
2. Capture before, middle, and completed states for each scene.
3. Verify the scene state changes through DOM assertions, not screenshots alone.
4. Test Play, Pause, Replay, manual stage selection, hover pause, and keyboard controls.
5. Test all target viewports.
6. Check `prefers-reduced-motion`.
7. Report any remaining limitation honestly.

## Deliverables

- Updated editable source
- Updated assets, if required
- New standalone HTML preview
- Desktop and mobile screenshots of the live states
- Short QA report describing what was tested

Do not deploy to production without explicit approval.
