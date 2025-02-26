import numpy as np

# Matrix
mat=np.random.randint(1, 9, size=(3, 3))
print("Matrix:", mat)

# Row-wise maximum
row_max=[]
for i in range(3):
    row_max.append(int(max(mat[i])))
print("Row-wise maximum:", row_max)

# Column-wise minimum
col_min=[]
for i in range(3):
    col_min.append(int(min(mat[:, i])))
print("Column-wise minimum:", col_min)