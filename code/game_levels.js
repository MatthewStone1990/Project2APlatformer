var GAME_LEVELS = [
  ["xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "x          |                        |                                                                          ",
   "x                                                                                                              ",
   "x                                                                                                              ",
   "x                     @                                                                                        ",
   "x           xxxxxxxxx xxxxxxxxx                                                                                ",
   "x     =    ox                =x                                                                                ",
   "x          xx           =     x                                                                                ",
   "x           x     =           x                                                                                ",
   "x     o     x=                x                                                                                ",
   "x     x     x        o        x                                                                                ",
   "x     |     x    xxxxxxxxx    x                                                                                ",
   "x           x                 x                                                                                ",
   "x           x                 x                                                                                ",
   "xx         xx                 x                                                                                ",
   "x          =x                 x                                                                                ",
   "x           x                 x                                                                                ",
   "x     o     xxxxxxxx   xxxxxxxx                                                                                ",
   "xxx  =x=  xxx                 |                                                                                ",
   "x           x        o                      x                                                                  ",
   "x           x      xxxxx                    x                                                                  ",
   "x     x     x      x=             x  x=     x                                                                  ",
   "x           x               o     |  |     oxo                                                                 ",
   "xo    o    ox              xxxx           xxxxx                                                                ",
   "xxx  =x=  xxx              x        |       x                                                                  ",
   "x         ||x                      oo       x                                                                  ",
   "x         | x                     xxxx      x                                                                  ",
   "x     o     x                               x                                                                  ",
   "x    xxx    x                               x                                                                  ",
   "x           x                               x                                                                  ",
   "x           x                               x                                                                  ",
   "xxxx  x  xx x                               x                                                                  ",
   "x x==   ==x x                               x                                                                  ",
   "x x       x+x                               x                                                                  ",
   "xxx       xxx                               x                                                                  ",
   "xoxxxx xxxxox                               x                                                                  ",
   "x           x                               x                                                                  ",
   "x           x                               x                                                                  ",
   "xxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
   
  ["x x                 !                   !                                       x",
   "x x                 !                   !                                       x",
   "x x                 !                   !                                       x",
   "x x     !   !       !                   !                                       x",
   "x x     !   !       !                   !  !      !                             x",
   "x+x@    !   !     o !                   !  !  o   !                             x",
   "x xxxxxx   o     !                      !  !      !                             x",
   "x                !      x       o       !  !      !                             x",
   "x                !         !!!!!xx      ! x!  o   !                             x",
   "x x       o      !     o           o !     !      !                             x",
   "x            xxxx!                 x       !      !                             x",
   "x       !   !       xxxx                  o!      !                             x",
   "x       !o  !          !                xxx!      !                             x",
   "x     x !   !              xx           !  !      !                             x",
   "x                    o                  !  !      !                             x",
   "x                       !  !            !                                       x",
   "x    o                   x              !       o                               x",
   "x  xx                                   !                                       x",
   "x         o          !       xx         !        o                              x",
   "x         o              o              !                                       x",
   "x         o              xx     !!!!!!!!!         o                             x",
   "x         x                   !!!                 xxx                           x",
   "x                       o     !                                                 x",
   "x                       x!    !                          o                      x",
   "x                         !   !                                                 x",
   "x                          !!!!                                                 x",
   "x                                                                               x",
   "x                                                          o                    x",
   "x                                                                               x",
   "x                                                                               x",
   "x                                                                               x",
   "x                                                                               x",
   "x                                                                      o   o  o x",
   "x                                                                   x  o o o  o x",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!            x  !! o o   o x",
   "                                                     !!!!!xxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                 "],
   
  ["x!!!!!!!!xxxx!x!x!xxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x",
   "x                                                                                                                  x",
   "x    ! !                                                                                                           x",
   "x                                                                                                                  x",
   "x                                                                                                                  x",
   "x          xxx xxx                                                                                                 x",
   "x         ox  o  x                                                                                                 x",
   "x         xx    =x                                                                                                 x",
   "x          x     x                                                                                                 x",
   "x    |o|   x=    x                                                                                                 x",
   "x    !x!   x     x                                                    !                                            x",
   "x          x     x                                                                                                 x",
   "x         ox  o  x              !                                          x               =x                      x",
   "x         xx  x  x              |                                          x       =        x                      x",
   "x          x =   x                                                         x=      +        x                      x",
   "x          x  =  x                                                         xxxxxxxxxxxxxxxxxxx                     x",
   "x     o    x   = x                                                         x=   o  o  o    =x                      x",
   "x    !x!   x     x                                                         x  =          =  x                      x",
   "x          x  o  x                                    x               |                          x                 x",
   "x          x  x  x                o   !   o=  !  =o   !   o  =!=  o   !    o                                       x",
   "x         ox     x                x       x       x       x       x        xxxxxxxxxxxxxxxxxxx                     x",
   "x         x=   !!               |                                                                  x=     ==      =x",
   "x                      xx  xx   !                                                                  xo   o  o       x",
   "x@                    x     x                                                                      xo o o  o  ooooox",
   "xxo      xx           x    =x                                                                      x o o   o  o   ox",
   "x xxxx        o       x= o  x                                                                      xxxxxxxxxxxxxxxxx",
   "x!!!!!!!!!!!!xxxx!!!!!xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x"]
   
   
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
