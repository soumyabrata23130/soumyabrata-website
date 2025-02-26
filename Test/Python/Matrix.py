import random

def mat_input():
    mat=[]
    for i in range(3):
        row=[]
        for j in range(3):
            row.append(random.randint(1, 9))
        mat.append(row)
    return mat

def mat_output(mat):
    for row in mat:
        for element in row:
            print(element, end=" ")
        print()

mat=mat_input()
print("Matrix:")                                                                 
mat_output(mat)

# Row-wise maximum
row_max=[]
for i in range(3):
    row_max.append(max(mat[:][i]))
print("Row-wise maximum:", row_max)

# Column-wise minimum
col_min=[]
for i in range(3):
    col_min.append(min(mat[i][:]))
print("Column-wise minimum:", col_min)