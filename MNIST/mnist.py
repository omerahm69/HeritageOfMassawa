

from sklearn.datasets import fetch_openml
mnist = fetch_openml('mnist_784', version=1, as_frame=False)
X, y = mnist["data"], mnist["target"].astype(int)

X.shape
y.shape

print(X.shape)
print (y.shape)

"""matplotlib inline"""
import matplotlib
import matplotlib.pyplot as plt
import numpy as np


# Convert label to int
y = y.astype(int)

# Choose an index
index = 36000

# To access row 36000:
some_digit = X[index]

plt.imshow(some_digit.reshape(28,28), cmap='gray')
plt.title(f"Label: {y[36000]}")
plt.axis('off')
plt.show()


# Shuffle indices
shuffle_index = np.random.permutation(70000)

# Split training and test data (60k train, 10k test)
X_train, X_test = X[shuffle_index[:60000]], X[shuffle_index[60000:]]
y_train, y_test = y[shuffle_index[:60000]], y[shuffle_index[60000:]]

y_train_5 = (y_train == 5) # True for all 5s, False for all other digits.
y_test_5 = (y_test == 5)

from sklearn.linear_model import SGDClassifier
sgd_clf = SGDClassifier(random_state=42)
sgd_clf.fit(X_train, y_train_5)

prediction=sgd_clf.predict([some_digit])
print("Predicted digit:", prediction[0])