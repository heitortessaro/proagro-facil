FROM python

WORKDIR /app-backend

COPY requirements.txt ./

RUN pip3 install -r requirements.txt

COPY . .

# RUN python3 app/main.py
# CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port=", "${PORT}"]
CMD ["uvicorn", "app.main:app",  "--host", "0.0.0.0", "--port=", PORT]



# FROM node:16.14-alpine

# WORKDIR /app-frontend

# COPY package.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm","start"]