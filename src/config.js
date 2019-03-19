const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-vb5d6luyzuv3"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://kbkkv6g52b.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_41zxhFU7y",
    APP_CLIENT_ID: "5e6632tmhim77ia2c6rnuhnoe",
    IDENTITY_POOL_ID: "us-east-1:ae988f86-87ea-4874-9b64-e846e2222ad5"
  },
  STRIPE_KEY: "pk_test_s2TuheOYOIDiqREF1YzZrWFb"
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1tcusm2cdc2qy"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ae9kh7ju71.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_8pWx1h5IS",
    APP_CLIENT_ID: "2r417ltiiocmovh38jtjr3nut",
    IDENTITY_POOL_ID: "us-east-1:7ed574c3-5f17-4900-82e8-a542ab9dc869"
  },
  STRIPE_KEY: "pk_test_s2TuheOYOIDiqREF1YzZrWFb"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
