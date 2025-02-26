import matplotlib.pyplot as plt
import numpy as np

# Generate values for x-axis (from 0 to 2π)
x = np.linspace(0, 2 * np.pi, 100)  # 100 points from 0 to 2π

# Compute sin and cos values
y_sin = np.sin(x)
y_cos = np.cos(x)

# Plotting sin and cos curves
plt.figure(figsize=(10, 6))  # Set figure size

# Plot sin curve
plt.plot(x, y_sin, label="sin(x)", color="b", linestyle="-", linewidth=2)

# Plot cos curve
plt.plot(x, y_cos, label="cos(x)", color="r", linestyle="--", linewidth=2)

# Adding title and labels
plt.title("Sin and Cos Curves")
plt.xlabel("x values (radians)")
plt.ylabel("y values")
plt.legend()  # Show legend
plt.grid(True)  # Add grid lines

# Show the plot
plt.tight_layout()
plt.show()