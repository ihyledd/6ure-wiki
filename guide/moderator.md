---
title: Moderator Guide
lang: en-GB
outline: deep
lastUpdated: true
search: false
---
# Moderator's Guide {moderator}

## What is the general information about moderation? {#general-information}

- **Read and understand all server rules** (rough memorization recommended)
- **Set server notifications** to *"Mentions Only"* (recommended) or *"All Messages"*
- **Know all server channels** and their purposes

### Staff Strikes System
- Given for improper staff behavior or rule violations
- 3 strikes = demotion

### Chat Management
- Direct conversations to appropriate channels
- **Prevent** spam/flooding with gifs/images in chat channels

### Ticket Support
- **Respond quickly** to support tickets
- ONE staff member per ticket only
- First staff member handles and closes the ticket

### Moderation Actions
- Use punishment commands where the incident occurred or in `#・staff-cmd`
- Always check previous warnings with `!warnings @mention`

### General Guidelines
- Maintain a family-friendly environment
- Use common sense
- **Have fun :)**

## What are the procedures for mod? {#punishment}

### **Verbal** __Warnings__

> Trainees! Please look at how current Moderators give verbal warnings and take inspiration from what they're doing and saying. Please don't use AI, it is obvious most of the time.

- **Being Disrespectful:**  
Verbal warn, if they continue: 12 hour ,mute.  
- **Arguments:**  
Send `!fight`, if they continue: 5 minute mute.  
- **NSFW Conversations:**  
Verbal warn.  
- **Talking in a different Language:**  
Verbal warn.  

**Ban Duration Guide**
| Type | Duration |
| ------------- | :----: |
| **DM Advertising** | 1-Day |
| **Suicide Encouragement** | 1-Week |
| **Doxxing** | Permanent |
| **NSFW Content** | Permanent |
| **Racism** | Permanent |
Always check user history with `!warnings (user)` before taking action

## What are the responsibilities of a moderator? {#responsibilities}

### **Handling Tickets**
- Tickets are a primary way for members to seek support. These include:
  - Claim level & boost perks
  - Report a member
  - Questions or concerns
  - Applying for staff or Partner Manager
  - Asking to partner
  - Sponsoring an event or giveaway

- **How to handle tickets:**
  - **Respond Quickly:** Address tickets as soon as possible.
  - **One Moderator per Ticket:** Only one staff member should handle each ticket. If you're unable to assist further, transfer the ticket to another staff member using `/transfer` command.
  - **Professional Tone:** Always respond politely, respectfully, and professionally.
  - **Closing Tickets:** Close tickets once they are resolved. This includes when the member leaves the ticket empty/no response.
::: warning
You are **required** to warn any member that leaves a ticket empty or no follow-up.
:::

### Deleting Messages

**When to Delete Messages:**
  - NSFW content
  - Hate speech
  - Racist or discriminatory remarks
  - Spam or self-promotion
  - Messages in the wrong channels

### Activity Expectations

**Minimum Activity:** 24-hour per week

**Trial Moderator Requirements:**
  - Be active and engage in the community.
  - Assist members and moderate channels.
  - Use at least 5 mod commands appropriately.
  
### General Responsibilities

**Core Duties:**
  - Enforce server rules and guidelines.
  - Monitor messages and remove rule-breaking content.
  - Handle user reports, tickets, and conflicts.
  - Maintain a welcoming and positive community atmosphere.

**Key Skills:**
  - Strong communication skills.
  - Conflict resolution.
  - Fair judgment and empathy.
  - Patience and professionalism.

## What are the moderation commands? {#moderation-commands}

  - `!warn @mention/id reason` - Issues a warning to the mentioned user.
  - `!sp @mention/id proof` - Set proof to the most recent case tied to your action. (Attach a file or link/message link)
  - `!mute @mention/id 1h reason` - Mutes the mentioned user for 1 hour. *(Default: 1 hour)*
  - `!tempmute @mention/id 1h reason` - Temporarily mutes the mentioned user for 1 hour. *(Default: 1 hour)*
  - `!ban @mention/id reason` - Bans the mentioned user. *(Default: No duration)*
  - `!tempban @mention/id 1d reason` - Temporarily bans the mentioned user for 1 day. *(Default: Unknown duration)*
  - `!warnings @mention/id` - Displays the warning history of the mentioned user.
 
**Note:** These are examples of the basic commands you'll use for moderation.

## Server Related {#server-related}

### Ticket 

If you claimed a ticket, please warn the member and close the ticket if no response are given for over 12 hours. This would help the server be less clogged.

### Booster Role

When a user opens a ticket to claim their custom role, please do the following:
1. **Verify Booster Status**: First, confirm that the member has boosted the server at least **twice** (`2x`). This is a strict requirement.
2. **Whitelist the Member**: Use the new command to grant them access to the role creation panel. (`/boosterrole whitelist`)

**Command:**
Using this command on a valid 2x booster will allow them to use `/boosterrole manage`. Please familiarize yourselves with this new procedure.

### Duplicate requests

Request duplicates can be monitored through: [#・request-log](https://discord.com/channels/1118862694980788276/1395469507014951063). You can simply **Delete** the detected duplicate request, or **Ignore** it (if it made some mistake or other reasons).

### Unable to click download button in Presets

If buttons in certain threads in `#・presets` went greyed out, it means the thread is archived. You may run the command `/reopen` to unarchive all archived threads. 

### 1-month old account restriction whitelist

To whitelist a member to bypass the `#・preset` download 1-month old account restriction, follow the steps below to ensure they're legit and not suspicious.

**Requirements to Get Whitelisted**
- The member **must provide**:
  -  A screenshot of their TikTok profile.
  - The account must be an editing account.
  - Make sure the screenshot clearly shows "**Edit profile**" — this confirms it’s their own account.

If you don’t see "Edit profile", it’s most likely fake.

**How to Check If They're Suspicious**
- Before approving, do the following:
  - Search up their TikTok username directly on TikTok.
  - Check if the account looks real: consistent content, normal follower/following ratio, not freshly made.
  - If something feels off (no posts, suspicious bio, reused content), ask follow-up questions or deny the request.
The command: `/leak whitelist`
