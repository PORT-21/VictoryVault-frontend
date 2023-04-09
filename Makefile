generate_apilib:
	curl https://raw.githubusercontent.com/PORT-21/VictoryVault-backend/main/openapi/bundled_openapi.yaml\
	> openapi.yaml
	npm run generate-client # --prefix
