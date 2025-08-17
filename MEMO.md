## 3. ブートストラップ

コマンド実行 → エラー

## エラー内容

```bash
C:\Users\ykbkc\OneDrive\Documents\misc\hello-cdk>cdk bootstrap
Bootstrapping environment aws://940863285927/ap-northeast-1...
Trusted accounts for deployment: (none)
Trusted accounts for lookup: (none)
Using default execution policy of 'arn:aws:iam::aws:policy/AdministratorAccess'. Pass '--cloudformation-execution-policies' to customize.
CDKToolkit: creating CloudFormation changeset...
CDKToolkit |  0/12 | 13:11:21 | REVIEW_IN_PROGRESS   | AWS::CloudFormation::Stack | CDKToolkit User Initiated
CDKToolkit |  0/12 | 13:11:26 | CREATE_IN_PROGRESS   | AWS::CloudFormation::Stack | CDKToolkit User Initiated
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::S3::Bucket            | StagingBucket
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | FilePublishingRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | LookupRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | ImagePublishingRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::SSM::Parameter        | CdkBootstrapVersion
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::ECR::Repository       | ContainerAssetsRepository
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | CloudFormationExecutionRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | ImagePublishingRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | FilePublishingRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | LookupRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::ECR::Repository       | ContainerAssetsRepository
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | CloudFormationExecutionRole
CDKToolkit |  0/12 | 13:11:30 | CREATE_IN_PROGRESS   | AWS::S3::Bucket            | StagingBucket
CDKToolkit |  0/12 | 13:11:31 | CREATE_IN_PROGRESS   | AWS::SSM::Parameter        | CdkBootstrapVersion Resource creation Initiated
CDKToolkit |  1/12 | 13:11:32 | CREATE_COMPLETE      | AWS::SSM::Parameter        | CdkBootstrapVersion
CDKToolkit |  1/12 | 13:11:32 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | FilePublishingRole
CDKToolkit |  1/12 | 13:11:32 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | ImagePublishingRole
CDKToolkit |  1/12 | 13:11:32 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | LookupRole
CDKToolkit |  1/12 | 13:11:32 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | FilePublishingRole Hook invocations complete.  Resource creation initiated
CDKToolkit |  1/12 | 13:11:32 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | ImagePublishingRole Hook invocations complete.  Resource creation initiated
CDKToolkit |  1/12 | 13:11:32 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | LookupRole Hook invocations complete.  Resource creation initiated
CDKToolkit |  1/12 | 13:11:33 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | FilePublishingRole Resource creation Initiated
CDKToolkit |  1/12 | 13:11:33 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | ImagePublishingRole Resource creation Initiated
CDKToolkit |  1/12 | 13:11:33 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | LookupRole Resource creation Initiated
CDKToolkit |  1/12 | 13:11:36 | CREATE_IN_PROGRESS   | AWS::ECR::Repository       | ContainerAssetsRepository
CDKToolkit |  1/12 | 13:11:36 | CREATE_FAILED        | AWS::ECR::Repository       | ContainerAssetsRepository The following hook(s) failed: [AWS::ControlTower::Hook] : Hook failed with message: ValidationError
        [CT.ECR.PR.2]: Require Amazon ECR private repositories to have image scanning enabled
        [FIX]: Set 'ScanOnPush' in 'ImageScanningConfiguration' to 'true'.

CDKToolkit |  1/12 | 13:11:36 | CREATE_IN_PROGRESS   | AWS::IAM::Role             | CloudFormationExecutionRole
CDKToolkit |  1/12 | 13:11:36 | CREATE_FAILED        | AWS::IAM::Role             | CloudFormationExecutionRole Resource creation cancelled
CDKToolkit |  1/12 | 13:11:36 | CREATE_FAILED        | AWS::IAM::Role             | ImagePublishingRole Resource creation cancelled
CDKToolkit |  1/12 | 13:11:36 | CREATE_FAILED        | AWS::IAM::Role             | LookupRole Resource creation cancelled
CDKToolkit |  1/12 | 13:11:36 | CREATE_FAILED        | AWS::IAM::Role             | FilePublishingRole Resource creation cancelled
CDKToolkit |  1/12 | 13:11:36 | CREATE_IN_PROGRESS   | AWS::S3::Bucket            | StagingBucket
CDKToolkit |  1/12 | 13:11:37 | CREATE_FAILED        | AWS::S3::Bucket            | StagingBucket Resource creation cancelled
CDKToolkit |  1/12 | 13:11:37 | ROLLBACK_IN_PROGRESS | AWS::CloudFormation::Stack | CDKToolkit The following resource(s) failed to create: [ImagePublishingRole, FilePublishingRole, LookupRole, StagingBucket, CloudFormationExecutionRole, ContainerAssetsRepository]. Rollback requested by user.
CDKToolkit |  1/12 | 13:11:40 | DELETE_IN_PROGRESS   | AWS::IAM::Role             | FilePublishingRole
CDKToolkit |  1/12 | 13:11:40 | DELETE_IN_PROGRESS   | AWS::IAM::Role             | ImagePublishingRole
CDKToolkit |  1/12 | 13:11:40 | DELETE_IN_PROGRESS   | AWS::SSM::Parameter        | CdkBootstrapVersion
CDKToolkit |  1/12 | 13:11:40 | DELETE_IN_PROGRESS   | AWS::IAM::Role             | LookupRole
CDKToolkit |  2/12 | 13:11:40 | DELETE_COMPLETE      | AWS::ECR::Repository       | ContainerAssetsRepository
CDKToolkit |  3/12 | 13:11:40 | DELETE_COMPLETE      | AWS::IAM::Role             | CloudFormationExecutionRole
CDKToolkit |  3/12 | 13:11:40 | DELETE_SKIPPED       | AWS::S3::Bucket            | StagingBucket
CDKToolkit |  2/12 | 13:11:41 | DELETE_COMPLETE      | AWS::SSM::Parameter        | CdkBootstrapVersion
CDKToolkit |  3/12 | 13:11:51 | DELETE_COMPLETE      | AWS::IAM::Role             | ImagePublishingRole
CDKToolkit |  4/12 | 13:11:53 | DELETE_COMPLETE      | AWS::IAM::Role             | LookupRole
CDKToolkit |  5/12 | 13:11:53 | DELETE_COMPLETE      | AWS::IAM::Role             | FilePublishingRole
CDKToolkit |  6/12 | 13:11:54 | ROLLBACK_COMPLETE    | AWS::CloudFormation::Stack | CDKToolkit

Failed resources:
CDKToolkit | 13:11:36 | CREATE_FAILED        | AWS::ECR::Repository       | ContainerAssetsRepository The following hook(s) failed: [AWS::ControlTower::Hook] : Hook failed with message: ValidationError
        [CT.ECR.PR.2]: Require Amazon ECR private repositories to have image scanning enabled
        [FIX]: Set 'ScanOnPush' in 'ImageScanningConfiguration' to 'true'.

❌  Environment aws://940863285927/ap-northeast-1 failed bootstrapping: ToolkitError: The stack named CDKToolkit failed creation, it may need to be manually deleted from the AWS  ❌  Environment aws://940863285927/ap-northeast-1 failed bootstrapping: ToolkitError: The stack named CDKToolkit failed creation, it may need to be manually deleted from the AWS console: ROLLBACK_COMPLETE: The following hook(s) failed: [AWS::ControlTower::Hook]
        at FullCloudFormationDeployment.monitorDeployment (C:\Users\ykbkc\AppData\Roaming\npm\node_modules\aws-cdk\lib\index.js:150358:17)
        at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
        at async _BootstrapStack.update (C:\Users\ykbkc\AppData\Roaming\npm\node_modules\aws-cdk\lib\index.js:152000:21)
        at async C:\Users\ykbkc\AppData\Roaming\npm\node_modules\aws-cdk\lib\index.js:340999:29 {
type: 'toolkit',
source: 'toolkit',
cause: undefined
}

NOTICES         (What's this? https://github.com/aws/aws-cdk/wiki/CLI-Notices)

34892   CDK CLI will collect telemetry data on command usage starting at version 2.1100.0 (unless opted out)

        Overview: We do not collect customer content and we anonymize the
                telemetry we do collect. See the attached issue for more
                information on what data is collected, why, and how to
                opt-out. Telemetry will NOT be collected for any CDK CLI
                version prior to version 2.1100.0 - regardless of
                opt-in/out. You can also preview the telemetry we will start
                collecting by logging it to a local file, by adding
                `--unstable=telemetry --telemetry-file=my/local/file` to any
                `cdk` command.

        Affected versions: cli: ^2.0.0

        More information at: https://github.com/aws/aws-cdk/issues/34892


        Affected versions: cli: ^2.0.0

        More information at: https://github.com/aws/aws-cdk/issues/34892


If you don’t want to see a notice anymore, use "cdk acknowledge <id>". For example, "cdk acknowledge 34892".
The stack named CDKToolkit failed creation, it may need to be manually deleted from the AWS console: ROLLBACK_COMPLETE: The following hook(s) failed: [AWS::ControlTower::Hook]


        More information at: https://github.com/aws/aws-cdk/issues/34892


If you don’t want to see a notice anymore, use "cdk acknowledge <id>". For example, "cdk acknowledge 34892".
The stack named CDKToolkit failed creation, it may need to be manually deleted from the AWS console: ROLLBACK_COMPLETE: The following hook(s) failed: [AWS::ControlTower::Hook]



If you don’t want to see a notice anymore, use "cdk acknowledge <id>". For example, "cdk acknowledge 34892".
The stack named CDKToolkit failed creation, it may need to be manually deleted from the AWS console: ROLLBACK_COMPLETE: The following hook(s) failed: [AWS::ControlTower::Hook]
```

## 原因・解決策

### 原因

ECR リポジトリの ScanOnPush が true じゃないとエラー（コントロールの影響）
→ そもそもこれが不要な気がするので提議する

```bash
  CDKToolkit |  1/12 | 13:11:36 | CREATE_FAILED        | AWS::ECR::Repository       | ContainerAssetsRepository The following hook(s) failed: [AWS::ControlTower::Hook] : Hook failed with message: ValidationError
          [CT.ECR.PR.2]: Require Amazon ECR private repositories to have image scanning enabled
          [FIX]: Set 'ScanOnPush' in 'ImageScanningConfiguration' to 'true'.
```

### 解決

- 以下のコマンドでブートストラップテンプレートを取得

  ```
  cdk bootstrap --show-template > bootstrap-template.yaml
  ```

- 再実行 → ブートストラップ成功

# ビルド（TS なので）

- 後工程で落ちる可能性のあるビルド系のエラーを前もって全件洗い出す

# スタックの一覧表示

```bash
cdk list
```

# cdk deploy のエラー

## 内容

```bash
HelloCdkStack | 2/7 | 22:29:30 | CREATE_FAILED        | AWS::Lambda::Permission    | HelloWorldFunction/invoke-function-url (HelloWorldFunctioninvokefunctionurlA2CB1A84) The following hook(s) failed: [AWS::ControlTower::Hook] : Hook failed with message: ValidationError
        [CT.LAMBDA.PR.2]: Require AWS Lambda function policies to prohibit public access
        [FIX]: When setting 'Principal' to '*', provide one of 'SourceAccount', 'SourceArn', or 'PrincipalOrgID'. When setting 'Principal' to a service principal (for example, s3.amazonaws.com), provide one of 'SourceAccount' or 'SourceArn'.

HelloCdkStack | 2/7 | 22:29:30 | CREATE_FAILED        | AWS::Lambda::Url           | HelloWorldFunction/FunctionUrl (HelloWorldFunctionFunctionUrl4150BDAD) The following hook(s) failed: [AWS::ControlTower::Hook] : Hook failed with message: ValidationError
        [CT.LAMBDA.PR.5]: Require an AWS Lambda function URL to use AWS IAM-based authentication
        [FIX]: Set the 'AuthType' parameter to 'AWS_IAM'
```

## 原因

AWS Control Tower の “プロアクティブ・コントロール” が、公開（パブリック）な Lambda Function URL を禁止しているため

## 解決策

Function URL を IAM 認証にする

- エラーにより失敗
  authType: lambda.FunctionUrlAuthType.NONE,
- IAM 認証へ変更
  authType: lambda.FunctionUrlAuthType.AWS_IAM,

### CT.LAMBDA.PR.2 エラーも解決した理由:

authType を NONE から AWS_IAM に変更したことで、CDK が生成する Lambda 関数のアクセス許可ポリシーが変わったからです。

#### 変更前 (authType: NONE):

- パブリックアクセスを許可するため、CDK が自動的に Principal: "\*"（すべてのユーザー）を設定 →Control Tower のセキュリティルール CT.LAMBDA.PR.2 に違反

#### 変更後 (authType: AWS_IAM):

- IAM 認証が必要になるため、CDK は AWS::Lambda::Permission リソース自体を作  
  成しない →Control Tower の要件を満たす

#### IAM 認証に変更することで：

1. 関数 URL へのアクセスに AWS 認証情報が必要になる
2. 自動的にパブリックアクセスが制限される
3. Control Tower のセキュリティ要件に準拠する

# IAM 認証に伴う変更

- URL をたたいてもアクセスできない

## 解決策

- HTTP 経由で SigV4 署名リクエスト

```
awscurl -X GET --service lambda --region ap-northeast-1 --profile "bs-per" "https://5gxwfamvhqjhxebnkrvpmyb3ua0gmxdm.lambda-ur
l.ap-northeast-1.on.aws/"

"Hello World!"
```
