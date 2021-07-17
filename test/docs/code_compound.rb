require 'lib'
require 'other'

### |_|
def hello
  puts 'hello'
  puts 'vue'
end
### |_|

# This function will NOT be shown
# in the `transcludeWith` demonstration
def do_not_showcase_me
  puts 'invisible...'
  puts 'excluded...'
  puts 'skipped...'
  puts 'ignored...'
end

# An extra comment
# Lorem Ipsum,
# or is it
# Quantum Leap
# instead?
# 
# Yadada-yah man!

## |_|
def goodebye
  puts 'bye...'
end
## |_|

# |_|
def bonus_track
  puts 'bonus...'
end
# |_|
