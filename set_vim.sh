#!/bin/bash

# install neovim
apt-get install neovim -y

# make nvim config folder and copy init
mkdir -p ~/.config/nvim
cp init.vim ~/.config/nvim

# install vim plug
sh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \
       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
