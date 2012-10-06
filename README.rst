The Elsie's writing machines project
====================================

Elsie_ is a 84 years old women who suffer a severe Parkinson's disease.

Some time ago she could write, slowly, with a special big keys keyboard,
but now its medicines are strongers, affecting her fine movements.

Elsie is wonderful person, a great poet and philosopher. She still
has a lot of words to share with the world. I really want to help her.

The idea
--------

My idea is very simple

She can't use the keyboard with precision, but still
can press keys. So, using a virtual keyboard,
that rotate the focus over each "virtual key",
when she press *any* real key, the virtual key is pressed

Tasks
-----

- create an extension to jquery.keyboard_ that rotates
  the focus (applying ``mouseenter`` / ``mouseleave`` to use hover effect)
  over each button visible in the keyboard ordered by appearance,
  in an infinite loop.

    - The delay beetwen should be configurable

    - Pressing any key or clicking a mouse button anywhere, the current
      "on focus" virtual key is triggered (simulating it was pressed)

    - After trigger a key, the loop is restarted.

Demo
------

See http://mgaitan.github.com/elsie for a demo of the work in progress


Want to help me?
-----------------

Thanks! Just fork this and send me your pull request.


.. _jquery.keyboard: https://github.com/Mottie/Keyboard
.. _Elsie: http://www.protestantedigital.com/ES/Magacin/articulo/4425/El-corazon-testigo-de-elsie-romanenghi-de-powell
