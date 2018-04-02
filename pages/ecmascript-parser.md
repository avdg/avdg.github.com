---
layout: layout
---
# Ecmascript parsing

> [Here is a page containing rules for ecmascript parsers](/ecmascript.html)

As you can see, the list is big and may seem complicated at first glance. But
there is some structure to these rules to make life a bit easier.

A compliant parser may split up the task of interpreting code in different parts:
- Read tokens
- Splitting the code up into tokens
- Add the tokens to a stream
- Read the stream of tokens to see if the order makes sense.
- Put the tokens into an abstract syntax tree or AST.

For ecmascript specific, the parser and the tokenizer can be considered separate
units for the main part where to tokenizer splits up the text into a token
stream and the parser builds up an AST tree from these tokens.

But there are at least 2 occasions where a tokenizer needs to be aware of the
context of the stream.

- A single `/` or `/=` can be interpret as the start of a RegExp or as a divider.
  The context can be determined by asking the parser if it needs a literal or an
  operator.
- A `{` has a different meaning in a template string than outside a template
  string. The context can be determined by keeping track by keeping a bracket
  counter and a template string counter and compare positions when reading a
  closing curly bracket.

# Tokenizer

The first set of rules are coloured green. You can click on `Lexical grammar` on
top of the page to only see these rules.

## Character encodings
A character in ecmascript is defined as a unicode character and unicode maintains
at least 136,000 characters. This compared to ASCII which has 128 characters
defined and even though there is room for 256 characters, the meaning of the
other 128 characters depends on the application it is used.

To allow room for such many characters you can use UTF-32 as a fixed character
length solution (all characters are 4 bytes wide) or UTF-16 or UTF-8, which uses
variable width length for characters. In these cases, the character length is
2 (for UTF-16) or 1 (for UTF-8) byte unless the stream reader reads a special
character.

For variable width length characters, if a special code is read, the stream will
at least read 1 more unit (2 byte for UTF-16 or 1 byte for UTF-8) or more
depending on the content of them.

In UTF-16 a character may be up to 2 units long, in UTF-8 this may be up to 4
units.

## Character unit

The first rule `SourceCharacter` defines the source character as any unicode
point. This means that the parser should never have to split a character in 2 to
understand the code ;-)

## Tokens

The second rule `InputElementDiv` gives a start point for the tokenizer on what
to look out for. Because of the structure of these rules are defined by meaning
and not by if-reading-this-character-do-that, a compiler may look very different
than the rules are defined in the specification.

# Parser

Most other rules are connected to the `Script` or `Module` rule of the parser
specification. Which can be found in the rules defined in purple at the nearly
end of the list. You can click `Scripts and Modules` on top of the page to see
the high level structure of an ecmascript compliant file.

The rules may be complicated to be interpreted. Especially for rules involving
statements can be hard to unwire the complexity that is needed to understand the
parsing logics.
