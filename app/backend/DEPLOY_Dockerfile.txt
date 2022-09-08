FROM python

WORKDIR /app-backend

COPY requirements.txt ./

RUN pip3 install -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app",  "--host", "0.0.0.0", "--port", PORT]
