if [ -f ~/.bashrc ]; then
	source ~/.bashrc
fi

# default PS1
# \h:\W \u\$ 

PS1="\[$(tput setaf 166)\]\u@ \W -> \[$(tput sgr0)\] "
export PS1


export PATH="/usr/local/sbin:$PATH"
export PATH="$HOME/.composer/vendor/bin:$PATH"
alias hostfile="subl /etc/hosts"
alias prof="subl ~/.bash_profile"
alias reprof=". ~/.bash_profile"
