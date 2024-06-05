
-----------------------------------------------------------------------
-- Users
-----------------------------------------------------------------------

IF EXISTS (SELECT 1 FROM sysobjects WHERE type = 'U' AND name = 'Users')
BEGIN
    DECLARE @reftable_1 nvarchar(60), @constraintname_1 nvarchar(60)
    DECLARE refcursor CURSOR FOR
    select reftables.name tablename, cons.name constraintname
        from sysobjects tables,
            sysobjects reftables,
            sysobjects cons,
            sysreferences ref
        where tables.id = ref.rkeyid
            and cons.id = ref.constid
            and reftables.id = ref.fkeyid
            and tables.name = 'Users'
    OPEN refcursor
    FETCH NEXT from refcursor into @reftable_1, @constraintname_1
    while @@FETCH_STATUS = 0
    BEGIN
        exec ('alter table '+@reftable_1+' drop constraint '+@constraintname_1)
        FETCH NEXT from refcursor into @reftable_1, @constraintname_1
    END
    CLOSE refcursor
    DEALLOCATE refcursor
    DROP TABLE [Users]
END

CREATE TABLE [Users]
(
    [id] INT NOT NULL IDENTITY,
    [UserName] VARCHAR(255) NOT NULL,
    [emailAdress] VARCHAR(255) NOT NULL,
    [password] VARCHAR(255) NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    [updated_at] DATETIME2 NOT NULL,
    CONSTRAINT [Users_pk] PRIMARY KEY ([id])
);

-----------------------------------------------------------------------
-- Tasks
-----------------------------------------------------------------------

IF EXISTS (SELECT 1 FROM sysobjects WHERE type ='RI' AND name='Tasks_fk_69bd79')
    ALTER TABLE [Tasks] DROP CONSTRAINT [Tasks_fk_69bd79];

IF EXISTS (SELECT 1 FROM sysobjects WHERE type = 'U' AND name = 'Tasks')
BEGIN
    DECLARE @reftable_2 nvarchar(60), @constraintname_2 nvarchar(60)
    DECLARE refcursor CURSOR FOR
    select reftables.name tablename, cons.name constraintname
        from sysobjects tables,
            sysobjects reftables,
            sysobjects cons,
            sysreferences ref
        where tables.id = ref.rkeyid
            and cons.id = ref.constid
            and reftables.id = ref.fkeyid
            and tables.name = 'Tasks'
    OPEN refcursor
    FETCH NEXT from refcursor into @reftable_2, @constraintname_2
    while @@FETCH_STATUS = 0
    BEGIN
        exec ('alter table '+@reftable_2+' drop constraint '+@constraintname_2)
        FETCH NEXT from refcursor into @reftable_2, @constraintname_2
    END
    CLOSE refcursor
    DEALLOCATE refcursor
    DROP TABLE [Tasks]
END

CREATE TABLE [Tasks]
(
    [id] INT NOT NULL IDENTITY,
    [title] VARCHAR(100) NOT NULL,
    [description] VARCHAR(1064) NULL,
    [status] VARCHAR(8) NOT NULL,
    [created_at] DATETIME2 NOT NULL,
    [updated_at] DATETIME2 NOT NULL,
    [user_id] INT NOT NULL,
    CONSTRAINT [Tasks_pk] PRIMARY KEY ([id])
);

BEGIN
ALTER TABLE [Tasks] ADD CONSTRAINT [Tasks_fk_69bd79] FOREIGN KEY ([user_id]) REFERENCES [Users] ([id])
END
;
