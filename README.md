# Pre-Generating Multi-Difficulty PDE Data For Few-Shot Neural PDE Solvers

Official website for the research paper on difficulty transfer in neural PDE solvers.

## Paper

**Pre-Generating Multi-Difficulty PDE Data For Few-Shot Neural PDE Solvers**

*Naman Choudhary\*, Vedant Singh\*, Ameet Talwalkar, Nicholas Matthew Boffi, Mikhail Khodak, Tanya Marwah*

Machine Learning Department, Carnegie Mellon University

\*Equal contribution

### Abstract

A key aspect of learned partial differential equation (PDE) solvers is that the main cost often comes from generating training data with classical solvers rather than learning the model itself. Another is that there are clear axes of difficulty—e.g., more complex geometries and higher Reynolds numbers—along which problems become harder for classical solvers and thus more likely to benefit from neural speedups. Towards addressing this chicken-and-egg challenge, we study difficulty transfer on 2D incompressible Navier-Stokes, systematically varying task complexity along geometry (number and placement of obstacles), physics (Reynolds number), and their combination.

We find that by classically solving many low and medium difficulty examples and including them in the training set, it is possible to learn high-difficulty physics from far fewer samples. By combining low and high difficulty data, we can spend **8.9× less compute** on pre-generating a dataset to achieve the same error as using only high difficulty examples.

## Website

Visit the project website: [https://naman-choudhary-ai-ml.github.io/pde-difficulty-transfer/](https://naman-choudhary-ai-ml.github.io/pde-difficulty-transfer/)

## Code Repository

Implementation code: [https://github.com/Naman-Choudhary-AI-ML/Geo-UPSplus](https://github.com/Naman-Choudhary-AI-ML/Geo-UPSplus)

## Citation

```bibtex
@article{choudhary2025pde,
  title={Pre-Generating Multi-Difficulty PDE Data For Few-Shot Neural PDE Solvers},
  author={Choudhary, Naman and Singh, Vedant and Talwalkar, Ameet and Boffi, Nicholas Matthew and Khodak, Mikhail and Marwah, Tanya},
  journal={arXiv preprint},
  year={2025}
}
```

## Contact

For questions, please contact: [namanchoud@andrew.cmu.edu](mailto:namanchoud@andrew.cmu.edu)

---

© 2025 Carnegie Mellon University
